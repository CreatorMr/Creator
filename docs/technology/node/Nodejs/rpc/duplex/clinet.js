const net = require('net')

const socket = new net.Socket()

socket.connect({
  host: '127.0.0.1',
  port: 4000
})

// socket.write("this is 单工通信")


const lessonids = [
  "136797",
  "136798",
  "136799",
  "136800",
  "136801",
  "136803",
  "136804",
  "136806",
  "136807",
  "136808",
  "136809",
  "141994",
  "143517",
  "143557",
  "143564",
  "143644",
  "146470",
  "146569",
  "146582"
]




socket.on('data', (buffer) => {
  console.log(buffer.toString())
  const seqBuffer = buffer.slice(0,2)
  const titleBuffer = buffer.slice(2);

  // 接收到数据之后，按照半双工通信的逻辑，马上开始下一次请求
  id = Math.floor(Math.random() * lessonids.length);
  console.log(seqBuffer.readInt16BE(), titleBuffer.toString())
  socket.write(encode(id));
})
let seq = 0;
// 把编码请求包的逻辑封装为一个函数
function encode(index) {
  buffer = Buffer.alloc(6);
  buffer.writeInt16BE(seq)
  buffer.writeInt32BE(
      lessonids[index], 2
  );
  console.log(seq, lessonids[index])
  seq++
  return buffer;
}

setInterval(() => {
  let id = Math.floor(Math.random() * lessonids.length);
  socket.write(encode(id));
}, 50);

// for(let i=0;i< 100;i++){
//   // 往服务器传数据
//   let id = Math.floor(Math.random() * lessonids.length);
//   socket.write(encode(id));
// }

// http 链接会自动把一次发请求的包 自动拼接  -- 粘包
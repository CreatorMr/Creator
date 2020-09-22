var playerAction = process.argv[process.argv.length - 1]

const game = require('./lib')

// game(playerAction)

let count = 0;
// 进程的标准输入 并把这个进程标准输入输出出来
process.stdin.on('data', e=>{
  const playerAction = e.toString().trim()
  // console.log(playerAction)
  const result = game(playerAction)
  console.log(result)
  if(result == -1) {
    count++
  }
  if(count === 3) {
    console.log('你太厉害了，我不玩了')
    process.exit();
  }
})
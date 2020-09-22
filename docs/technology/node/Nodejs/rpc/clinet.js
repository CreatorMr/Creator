const net = require('net')

const socket = new net.Socket()

socket.connect({
  host: '127.0.0.1',
  port: 19000
})

socket.write("this is 单工通信")



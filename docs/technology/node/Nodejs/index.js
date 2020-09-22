// console.log('sd')

// console.log(Date)

// console.log(Math)
// console.log(setInterval)
// console.log(setTimeout)

// // console.log(requestAnimationFrame) // 浏览器渲染的下一帧
// console.log(setImmediate) // 类似 requestAnimationFrame

// console.log(__filename) // 当前运行的脚本所在的位置
// console.log(__dirname) // 前运行的脚本所在的目录位置
// console.log(process)

console.log(process.argv)

var playerAction = process.argv[process.argv.length - 1]

var random = Math.random() * 3

if (random < 1) {
  var computerAction = 'rock'
} else if (random > 2) {
  var computerAction = 'scissor'
} else {
  var computerAction = 'paper'
}

if (computerAction === playerAction) {
  console.log("平局")
} else if (computerAction === "rock" && playerAction === 'paper' ||
  computerAction === "scissor" && playerAction === 'rock' ||
  computerAction === "paper" && playerAction === 'scissor') {
  console.log("你赢了")

} else {
  console.log("你输了")
}
console.log('hello ')

exports.hello = 'world'

exports.add = function(a, b) {
  return a + b;
}

exports.geekbang = {hello: 'world'}

// setTimeout(()=> {
// console.log(exports)
// },2000)

module.exports = function(a,b) {
  return a + b;
}
// 修改module.exports 会覆盖掉所有的exports 的内容
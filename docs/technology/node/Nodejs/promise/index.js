
// (function() {
//   var promise = new Promise((resolve, resject) => {
//     setTimeout(() => {
//       // resolve()
//       reject(new Error())
//     }, 500)
//   })


  
//   console.log(promise)
  
//   setTimeout(() => {
//     console.log(promise)
//   }, 800)
// })()

// uncaugth error
// reject 之后未捕获错误，就会抛到node 或者 浏览器 js 解释的全局 
// 

// (function(){
//   var promise = new Promise((resolve, resject) => {
//         setTimeout(() => {
//           resolve()
//         }, 300)
//         setTimeout(() => {
//           reject(new Error())
//         }, 500)
//       })
      
//       console.log(promise)
      
//       setTimeout(() => {
//         console.log(promise)
//       }, 800)
// })()

//  面试代码
// (function() {
//   var promise = interview()
//   promise.then(res=>{
//     console.log('smile')
//   }).catch(err=> {
//     console.log('cry')
//   })
// })()


// (function() {
//   var promise = interview()
//   var promise2 = promise
//     .then(res=>{
//       // throw new Error('refuse')
//       return 'accept'
//     })
//   setTimeout(()=>{
//     console.log(promise)
//     console.log(promise2)
//   }, 800)
// })()

// .then 会返回一个全新的promise
// 根据函数的执行结果  


// (function() {
//   var promise = interview()
//   var promise2 = promise
//     .then(res=>{
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve('accept')
//         }, 400)
//       })
//     })
//   setTimeout(()=>{
//     console.log(promise)
//     console.log(promise2)
//   }, 800)
//   setTimeout(()=>{
//     console.log(promise)
//     console.log(promise2)
//   }, 1000)
// })()

// function interview(callback) {
//   return new Promise((resolve,reject) => {
//       setTimeout(()=>{
//         if(Math.random() < 1) {
//           resolve('success')
//         } else {
//           reject(new Error('fail'))
//         }
//       }, 500)
//   })
// }

// (function(){
//   var promise = interview(1)
//     .then(()=>{
//       return interview(2)
//     })
//     .then(()=>{
//       return interview(3)
//     })
//     .then(()=>{
//       console.log('smile')
//     })
//     .catch((err)=>{
//       console.log('cry at ' + err.round + 'round')
//     })

//   function interview(round) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if(Math.random() > 0.2) {
//           resolve('success')
//         } else {
//           var error = new Error('fail');
//           error.round = round;
//           reject(error)
//         }
//       }, 500)
//     })
//   }
// })()

(function(){
  Promise.all([
    interview('geekbang'),
    interview('tencent')
  ])
  .then(()=> {
    console.log('smile')
  })
  .catch(err=> {
    // 接收第一个失败的catch
    console.log('cry ar ' + err.name)
  })
  var promise = interview(1)
    
  function interview(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(Math.random() > 0.2) {
          resolve('success')
        } else {
          var error = new Error('fail');
          error.name = name;
          reject(error)
        }
      }, 500)
    })
  }
})()

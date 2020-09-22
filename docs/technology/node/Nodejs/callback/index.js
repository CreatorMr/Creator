
// try {
//   interview(function() {
//     console.log('smile')
//   })
// } catch (error) {
//   console.log('是啊比',error)
// }

interview(function(err, res) {
  if(err) {
    console.log('cry')
  } else {
    console.log('smile')
  }
})
function interview(callback) {
  setTimeout(()=>{
    if(Math.random < 0.8) {
      callback('success')
    } else {
      callback(new Error('fail'))
    }
  }, 1000)
}

// console.log(1)
// Promise.resolve().then(() => {
//   console.log('promise one')
// })
// process.nextTick(() => {
//   console.log('nextTick one')
// })

// setTimeout(() => {
//   process.nextTick(() => {
//     console.log('nextTick two')
//   })
//   console.log(3)
//   Promise.resolve().then(()=> {
//     console.log('promise two')
//   })
//   console.log(4)
// }, 3);


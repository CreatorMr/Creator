import { reject } from "async"

console.log(async function() {

  // return 4
  throw new Error('4')
}())

console.log(function() {
  return new Promise(resolve=>{
    // resolve(4);
    reject(new Error('4'))
  })
}())

// async 就是return promise的一个普通函数


const result = async function() {
  var content = await new Promise((resolve,reject)=> {
    setTimeout(() => {
      resolve(6);
    }, 500)
  })

  console.log(content) // await 加与不加时候打印的时机和值
  return 4
}()

setTimeout(() => {
  console.log(result)
}, 800)



(function(){
  
  try {
    await interview(1)
    await interview(2)
    await interview(3)

    await Promise.all([
      interview(1),
      interview(2)
    ])
  } catch (error) {
    return console.log('cry at ' + err.round)
  }
  console.log('smile')
    

  function interview(round) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if(Math.random() > 0.2) {
              resolve('success')
            } else {
              var error = new Error('fail');
              error.round = round;
              reject(error)
            }
          }, 500)
      })
  }
})()

/**
 * 模拟请求
 * @param {*} index 
 * @param {*} timer 
 */
const axios = (index, timer) => {
  console.log(`第${index}个请求开始`)
  return new Promise((resolve, reject) => {
    setTimeout(_=>resolve(`第${index}请求完成`), timer)
  })
}

/**
 * 
 */
class RequestLimit {
  constructor(limit) {
    this.limit = limit;
    this.queueList = [];
    this.curRequestCount = 0;
  }
  /**
   * 待执行request队列
   */
  awaitQueue() {
    return new Promise(resolve=>this.queueList.push(resolve))
  }
  /**
   * 暴露的请求
   * @param {*} fn 
   * @param  {...any} args 
   */
  request(fn, ...args) {
    return new Promise((resolve, reject) => {
      if(this.curRequestCount > this.limit) {
        await this.awaitQueue()
      }
      this.curRequestCount++
      return this.exec(fn, args, resolve, reject)
    })
  }
  exec(fn, args, resolve, reject) {
    return fn(...args).then(resolve, reject).finally(() => {
      this.curRequestCount--
      if(this.queueList.length) {
        let next = this.queueList.shift()
        next()
      }
    })
  }
}

let reqAsync = new RequestLimit(2)
reqAsync.request(axios, 1, 10000).then(res=>console.log('request end 1'))
// export default requestLimit;
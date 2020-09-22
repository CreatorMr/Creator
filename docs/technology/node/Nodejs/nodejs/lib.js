const EventEmitter = require('events').EventEmitter

class project extends EventEmitter {
  constructor() {
    super()
    setInterval(()=>{
      this.emit('less', {price: Math.random() * 100})
    }, 3000)
  }
}
let p = new project;

module.exports = p
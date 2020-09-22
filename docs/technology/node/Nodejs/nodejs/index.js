
const p = require('./lib')
p.addListener('less', (res) => {
  if(res.price < 80) {
    console.log('buy')
  }
})
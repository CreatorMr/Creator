```javascript
Array.prototype.push = function(value) {
  this[this.length] = value
  return this.length
}
```
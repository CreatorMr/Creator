let geeTing;
geeTing = {}

console.log(geeTing)


function compare(person1, person2 = person){
  if(person1 === person2) {
    console.log('this is the same')
  } else {
    console.log('not the same')
  }
}
const person = { name: 'creator' }
compare(person)

let  obj = { a: 123, b: 456 }
obj = {
  ...obj,
  a: 789
}
console.log(obj)

[1,2,3,4].reduce((x, y) => {console.log(x,y)})

let x,y;
try {
  throw new Error()
} catch (x) {
 ( x = 1, y =2);
 console.log(x)
}
console.log(x)
console.log(y)
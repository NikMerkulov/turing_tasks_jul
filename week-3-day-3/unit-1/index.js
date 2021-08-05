// 1
let a = 0
while (a < 10) a++
console.log(a)
a = 0
do {
  a++
} while (a < 10)
console.log(a)
a = 0
for (a; a < 10; a++) {}
console.log(a)
// 2
//while (true) if (prompt('"Завершить"') === 'Завершить') break
// 3
let odd = []
for (let i = 0; i < 20; i++) if (i % 2 === 1) odd.push(i)
console.log(odd.join(", "))
// 4
const array = [11, "hello", { a: 1 }, null, false]
const varType = (variable) => {
  switch (typeof variable) {
    case "number":
      return "number"
    case "string":
      return "string"
    case "boolean":
      return "boolean"
    case "object":
      return "object"
    default:
      return "undefined"
  }
}
let text = ""
for (let i = 0; i < array.length; i++) {
  text += `Тип ${array[i]}: ${varType(array[i])}\n`
}
alert(text)
// 5
let one = 1,
  two = 2,
  temp
console.log(one, two)
temp = one
one = two
two = temp
console.log(one, two)
// 6
console.log(`${143.2343.toFixed(2)}`)
// 7
console.log(Math.floor(42.2654 * 10) / 10)
// 8
let str1 = 'I learn JavaScript',
  str2 = 'JavaScript'
console.log(str1.indexOf(str2))
// 9 
const setCounter = () => {
  let count = 0
  return ()=> {
    count++
    console.log(count)
  }
}
const firstCounter = setCounter()
const secondCounter = setCounter()
firstCounter()
firstCounter()
secondCounter()
firstCounter()
// 10
const scope = function() {console.log(this)}
const obj = {
  emptyFunc: () => {},
  emptyFunc1: function() {}
}
scope()
scope.call(obj.emptyFunc)
scope.call(obj.emptyFunc1)
// 11
const sqr = number => number * number
const squarePow = (number, callback) => callback(callback(number))
console.log(squarePow(5, sqr), Math.pow(5, 4))
// 12
const curry = (func) => function curried(...args) {
  if (args.length >= func.length) {
    return func.apply(this, args)
  } else {
    return (...args2) => {
      return curried.apply(this, args.concat(args2))
    }
  }
}
const sum = (a, b, c) => a + b + c
console.log(curry(sum)(2)(4)(3))
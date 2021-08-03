// 1
const someFunc = (...args) => {
  args.forEach((el) => console.log(el))
}
someFunc(
  "Hey,",
  "it's",
  "a",
  "great",
  "day",
  "to",
  "write",
  "some",
  "javascript",
  "code",
  ", innit?"
)
// 2
const compare = (number1, number2) => {
  if (number1 > number2) {
    return 1
  } else if (number1 < number2) {
    return -1
  } else return 0
}
console.log(
  compare(14, 52),
  compare(42, { a: 1 }),
  compare(NaN, 12),
  compare(Array, "9999999999"),
  compare(Array, "gibberish")
)
// 3
const add = (number1, number2) => number1 + number2,
  subtract = (number1, number2) => number1 - number2,
  multiply = (number1, number2) => number1 * number2,
  devide = (number1, number2) => number1 / number2
console.log(
  add(12, 4), 
  subtract(12, 4), 
  multiply(12, 4), 
  devide(12, 4)
)
// 4
const greetings = (name = "гость") => console.log(`Здраствуйте, ${name}!`)
greetings()
// 5
const fibonacci = (range) => {
  if (range <= 1) return 1
  return fibonacci(range - 1) + fibonacci(range - 2)
}
console.log(fibonacci(42))
// 6
const fibonacci1 = (range) => {
  let a = 1,
    b = 0,
    temp
  while (range >= 0) {
    temp = a
    a += b
    b = temp
    range--
  }
  return b
}
console.log(fibonacci1(42))

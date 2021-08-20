const seconds = document.querySelector('#seconds'),
refreshTime = () => {
  currentTime = new Date()
  h = currentTime.getHours() 
  m = currentTime.getMinutes()
  s = currentTime.getSeconds()
  // 2
  seconds.innerText = ` ${(60 * 60 * 24) - (h * 60 * 60 + m * 60 + s)}`
  // 1
  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  s = s < 10 ? '0' + s : s
  document.querySelector('#clock').innerHTML = `${h}:${m}:${s}`
}
refreshTime()
setInterval(refreshTime, 1000)
// 3
const input = document.querySelector('#timerInput'),
display = document.querySelector('#timerDisplay'),
startTimer = () => {
  amount = input.value
  input.value = ''
  display.innerText = amount + ' seconds left'
  setInterval(() => display.innerText = amount > 0 ? --amount + ' seconds left' : '0 seconds left', 1000)
}
input.nextElementSibling.addEventListener('click', startTimer)
// 4
const getRandomBetween = (min, max) => Math.round((max - min) * Math.random() + min),
array = []
for (let i = 0; i < 30; i++) array.push(getRandomBetween(5, 15))
console.log('Task 4: ', array)
// 5
const promise = new Promise((resolve, reject) => {
  console.log('Task 5: Starting promise...')
  setTimeout(() => {
    resolve(console.log('Task 5: Promise completed.'))
// 6
    return new Promise((resolve, reject) => {
      console.log('Task 6: Starting new promise...')
      setTimeout(() => {
        reject('Task 6: Promise failed.')
      }, 3000)
    })
  }, 3000)
})
// 7
const random = () => new Promise((resolve, reject) => {
  const number = Math.round(Math.random() * 20)
  number < 10 ?
    resolve(console.log(`Task 7: Generated number: ${number}`)) :
    reject(`Task 7: Generated number is greater than 10: ${number}`)
})
random().catch(err => { // 8
  console.log('Task 7: Error: ' + err)
}).then(() => {
  console.log('Task 7: Promise finished it\'s work')
})
// 9
const allEven = array => array.filter(el => el % 2 === 0)
const arrSum = array => {
  let temp = 0
  for (const i of array) {
    temp += i
  }
  return temp
}
const sumEven = array => new Promise((resolve, reject) => reject(allEven(array)))
  .catch(result => arrSum(result))
  .then(result => console.log('Task 9: Result: ', result))
sumEven([4, 6, 5, 7, 1, 2, 2, 9, -1, -12])
// 10
async function sumEven1(array) {
  throw new Error(await allEven(array))
}
sumEven1([4, 6, 5, 7, 1, 2, 2, 9, -1, -12])
  .catch(result => arrSum((result.message.split(',').map(el => Number(el)))))
  .then(result => console.log('Task 10: Result: ', result))
// 11
new Promise((resolve, reject) => {
  reject('False alarm')
}).catch(result => console.log('Task 11: ' + result))
// 12
const promise1 = Promise.resolve('promise1')
const promise2 = Promise.resolve('promise2')
const promise3 = Promise.resolve('promise3')
Promise.race([promise1, promise2, promise3]).then(result => console.log('Race: ' + result))
Promise.all([promise1, promise2, promise3]).then(results => console.log('All: ' + results))
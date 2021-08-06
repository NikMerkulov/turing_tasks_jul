// 1
console.log('////////// 1 //////////')

const obj1 = {
  a: 1,
  b: 2,
  c: 3
},
  objLog = (obj) => {
    for (const key in obj) {
      console.log(`${key} - ${obj[key]}`)
    }
  }
objLog(obj1)
// 2
// Дублирование первого задания
// 3
console.log('////////// 3 //////////')

const arr1 = [1, 2, 3, 4, 5],
  arr2 = [11, 22, 33, 44, 55],
  arr3 = [111, 222, 333, 444, 555],
  map = new Map()
map.set(arr1, 'First string')
map.set(arr2, 'Second string')
map.set(arr3, 'Trird string')
console.log(map)
// 4
console.log('////////// 4 //////////')

for (const entry of map.entries()) {
  console.log(entry[0])
}
// 5
console.log('////////// 5 //////////')

const set1 = new Set()
for (let i = 1; i < 4; i++)
  set1.add(i)
console.log(set1)
// 6
console.log('////////// 6 //////////')

console.log(set1.has(3), set1.has(4))
// 7
console.log('////////// 7 //////////')

const arr4 = [1, 2, 3, 4, 3, 2, 5, 3]
  set2 = new Set(arr4)
console.log(arr4, set2)
// 8
console.log('////////// 8 //////////')

const week = new Map(),
  ru = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
  en = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
for (let i = 0; i < 7; i++) week.set(en[i], ru[i])
console.log(week)
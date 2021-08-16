// 1
console.log("////////// 1 //////////")

const obj1 = {
  a: "a",
  b: "b",
  c: "c",
}
console.log(obj1["a"], obj1.a)
// 2
console.log("////////// 2 //////////")

const obj2 = {
  a: 2,
  b: "Coding",
}
console.log(Object.assign(obj2), { ...obj2 })
// 3
console.log("////////// 3 //////////")

const obj3 = {
  a: 4,
}
console.log(obj3)
obj3.b = 5
console.log(obj3)
delete obj3.a
console.log(obj3)
// 4
console.log("////////// 4 //////////")

const obj4 = {
  name: "Иван",
  lastName: "Иванов",
  salary: 0,
}
for (const key in obj4) {
  console.log(`${key}: ${obj4[key]}`)
}
// 5
console.log("////////// 5 //////////")

const arr1 = [...Array(10).keys()]
for (const index in arr1) {
  console.log(arr1[index])
}
for (const index of arr1) {
  console.log(arr1[index])
}
// 6
console.log("////////// 6 //////////")

const newAnimal = (name, kind) => {
  return {
    name: name,
    kind: kind,
  }
}
console.log(newAnimal("Bob", "Terrier"))
// 7
console.log("////////// 7 //////////")

const str = "sndfwebovkazsdbvqawf",
  sortStr = (str) =>
    str
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("")
console.log(str)
console.log(sortStr(str))
// 8
console.log("////////// 8 //////////")

const newRandomArray = (maxLength = 10, numberSize = 3, minLength = 0) => {
  if (
    typeof maxLength === "number" &&
    maxLength < Math.pow(2, 32) &&
    maxLength > 0
  ) {
    if (typeof numberSize === "number" && numberSize < 16 && numberSize > 0) {
      if (typeof minLength === "number" && minLength <= maxLength) {
        let length = Math.floor(Math.random() * maxLength + 1),
          amplifier = 1
        if (length < minLength) length = minLength
        let newArr = new Array(length)
        while (numberSize > 0) {
          amplifier *= 10
          numberSize--
        }
        for (let i = 0; i < newArr.length; i++) {
          newArr[i] = Math.floor(Math.random() * amplifier)
        }
        return newArr
      } else throw new Error("Invalid array minimal length.")
    } else throw new Error("Invalid number size.")
  } else throw new Error("Invalid array maximal length.")
}
const arr2 = newRandomArray(20, 5, 5),
  sortArr = (array) => {
    let done = false
    while (!done) {
      done = true
      for (let i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false
          let tmp = array[i - 1]
          array[i - 1] = array[i]
          array[i] = tmp
        }
      }
    }
    return array;
  }
console.log(arr2)
console.log(sortArr(arr2))
// 9
console.log("////////// 9 //////////")

const indexOf = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i
  }
  return undefined
},
  arr3 = ["text", null, { a: 1 }, 1235, "s"]
console.log(indexOf(arr3, 1235))
// 10
console.log("////////// 10 //////////")

const arr4 = []
for (let i = 0; i < 10; i++) {
  arr4.push(newRandomArray(10, 3, 5)) // change third param to value of the first param to have no empty items
}
let temp = []
for (let i = 0; i < arr4.length; i++) {
  temp = []
  for (let j = 0; j < arr4.length; j++) {
    temp.push(arr4[i][j])
  }
  console.log("[" + temp.join("] [") + "]")
}
// 11
console.log("////////// 11 //////////")

const monthName = (date, lang = en) => {
  if (typeof date === "number" && date > 0 && date < 13) {
    const months = [
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
    ]
    if (lang === "en") return months[0][date - 1]
    else if (lang === "ru") return months[1][date - 1]
    else return "Incorrect language"
  }
}
console.log(monthName(9, "en"))
// 12
console.log("////////// 12 //////////")

const clone = (obj) => {
    let clone = {}
    for (const [key, value] of Object.entries(obj)) {
      clone[key] = value
    }
    return clone
  },
  hamburger = {
    buns: "White",
    bacon: true,
    cheeze: true,
    sause: "Ketchup",
  }
console.log(clone(hamburger))
// 13
console.log("////////// 13 //////////")

const sum = (array) => array.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum(newRandomArray(20, 2)))
// 14
console.log("////////// 14 //////////")

obj5 = {
  name: 'Leonid',
  age: 32,
  job: 'frontend'
}
const setProto = (newObj, targetObject) => {
  newObj.__proto__ = targetObject
  return newObj
}
obj6 = setProto({pay: 3000, hobby: 'Rugby'}, obj5)
console.log(obj6)
// 15
console.log("////////// 15 //////////")

const collect = (array) => {
  if (Array.isArray(array)) {
    let temp,
      newArray = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        temp = array[i]
      }
      newArray.push(...temp)
    }
    return newArray
  } else throw new Error('Argument is not array')
},
  arr5 = [newRandomArray(10, 2), newRandomArray(10, 2), newRandomArray(10, 2)]
console.log(arr5)
console.log(collect(arr5))
// 16
console.log("////////// 16 //////////")

console.log(`[] + []: ${[] + []}\n[10] + [1]: ${[10] + [1]}\n[] - []: ${[] - []}\n+[]: ${+[]}\n+{}: ${+{}}\n{} + {}: ${{} + {}}\n{} - {}: ${{} - {}}\n!{}: ${!{}}\n[] == []: ${[] == []}\n{} === {}: ${{} === {}}`)

// 17
console.log("////////// 17 //////////")

const obj7 = {
  firstName: 'Иван',
  lastName: 'Иванов',
  years: 25 }, 
  {firstName: name, years: age} = obj7
console.log(name, age)

// 18
console.log("////////// 18 //////////")

const list = ['Понедельник', 'Вторник', 'Среда'],
  {0: monday, 1: tuesday, 2: wednesday} = list
console.log(monday, tuesday, wednesday)
// 19
console.log("////////// 19 //////////")

let var1 = 1,
  var2 = 2
console.log(var1, var2)
;[var1, var2] = [var2, var1]
console.log(var1, var2) 
// 20
console.log("////////// 20 //////////")

const arr6 = newRandomArray(20, 5, 5)
console.log(arr6)
console.log(arr6.sort((a, b) => a - b))
// 21
console.log("////////// 21 //////////")

const put = (array, value, index) => {
  if (index >= 0 && index < array.length) {
    array.splice(index, 0, value) 
    return array
  } else {
    array.push(value)
    return array
  }
},
  arr7 = newRandomArray(20, 5, 5)
console.log(arr7)
console.log(put(arr7, 15, 4))

// 22
console.log("////////// 22 //////////")

const copyArray = (array) => [...array],
  copyObject = (obj) => ({...obj}),
  arr8 = newRandomArray(10, 3, 10),
  obj8 = {name: 'George', age: 20, occupation: 'Rabotyaga', obj: {a: 1}},
  arr8_clone = copyArray(arr8),
  obj8_clone = copyObject(obj8)
obj8.obj = 'hey'
console.log(arr8, arr8_clone, obj8, obj8_clone)
// 23
console.log("////////// 23 //////////")

const arr9 = [1, 2, 3],
  arr10 = ['a', 'b', 'c']
console.log([...arr9, ...arr10])
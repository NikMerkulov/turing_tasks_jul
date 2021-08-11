// 1 - 2
console.log('////////// 1 - 2 //////////')
class Employee {
  constructor(name, age, salaryPerHour, hours) {
    this._name = name
    this._age = age
    this._salaryPerHour = salaryPerHour
    this._hours = hours
  }
  // GETTERS
  get name() {
    return this._name
  }
  get age() {
    return this._age
  }
  get salaryPerHour() {
    return this._salaryPerHour
  }
  get hours() {
    return this._hours
  }
  // SETTERS
  set name(newName) {
    this._name = newName
  }
  set age(newAge) {
    this._age = newAge
  }
  set salaryPerHour(newSalaryPerHour) {
    this._salaryPerHour = newSalaryPerHour
  }
  set hours(newName) {
    this._hours = newName
  }
  // METHODS
  getSalary() {
    return this.salaryPerHour * this.hours
  }
}

const emp1 = new Employee('Bob', 22, 80, 56)
const emp2 = new Employee('Vincent', 54, 140, 128)
console.log(emp1.getSalary())
console.log(emp2.getSalary())
// 3
console.log('////////// 3 //////////')

class Validator {
  isEven(number) {
    return number % 2 === 0 ? true : false
  }
  isFloat(number) {
    return number.toString().match(/^[-+]?[0-9]+\.[0-9]+$/) ? true : false
  }
  isNegative(number) {
    return number < 0 ? true : false
  }
}
console.log(Validator.prototype.isEven(42))
console.log(Validator.prototype.isFloat(-42.5))
console.log(Validator.prototype.isNegative(-42))
// 4
console.log('////////// 4 //////////')
class Strange {
  capitalize(str) {
    let words = str.split(' ')
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
   }
    return words.join(' ')
  }
  uncapitalize(str) {
    let words = str.split(' ')
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toLowerCase() + words[i].substring(1);
   }
    return words.join(' ')
  }
  lengthWithoutSpaces(str) {
    return str.replace(/\s/g,'').length
  }
}
console.log(Strange.prototype.capitalize('Lorem ipsum dolor sit amet consectetur adipisicing elit'))
console.log(Strange.prototype.uncapitalize('Lorem ipsum Dolor Sit amet consectetur Adipisicing elit'))
console.log(Strange.prototype.lengthWithoutSpaces('Lorem ipsum dolor sit amet consectetur adipisicing elit'))
// 5
console.log('////////// 5 //////////')

class AccountingEmployee extends Employee {
  constructor(name, age, salaryPerHour, hours) {
    super(name, age, salaryPerHour, hours)
  }
  work() {
    console.log(`${this.name} приступил к выполнению обязанностей.`)
  }
}
const accEmp = new AccountingEmployee('George', 24, 120, 72)
accEmp.work()
// 6
console.log('////////// 6 //////////')
class DOMElement {
  constructor(selector) {
    this.element = document.querySelector('#' + selector)
  }
  innerText(text) {
    this.element.appendChild(document.createTextNode(text))
    return this
  }
  innerHTML(content) {
    this.element.innerHTML = content
    return this
  }
  append(element) {
    this.element.appendChild(element)
    return this
  }
  addTextBefore(text) {
    this.element.innerHTML = text + this.element.innerHTML
    return this
  }
  addTextAfter(text) {
    this.element.innerHTML += text
    return this
  }
  changeAttribute(attributeName, value) {
    if (this.element.hasAttribute(attributeName)) {
      this.element.removeAttribute(attributeName)
      this.element.setAttribute(attributeName, value)
    }
    return this
  }
  remove() {
    this.element.remove()
  }
  getChild(selector) {
    console.log(this.element.children) // element: div#parent
    this.element = this.element.querySelector('#' + selector) // #child
    console.log(this) // element: null
    return this
  }
}
const element = new DOMElement('parent')
element
    .innerText('Parent Element')
    .append(document.createElement('p'))
    .getChild('child')
    .addTextAfter(' / New Text')
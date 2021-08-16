// Использовал, чтобы алерт и промпт не вылазили до загрузки дома
window.onload = () => {
  // 1
  let firstVar
  alert(firstVar)
  // 2
  let variable = prompt("Введите первое число")
  alert("Вы ввели: " + variable)
  // 3
  let num = 3,
    str = ""
  alert(
    `Num: ${!!num}, Str: ${!!str}, '' == false, так как не содержит других символов`
  )
  // 4
  let firstNumber = parseInt(prompt("Введите первое число"))
  let secondNumber = parseInt(prompt("Введите второе число"))
  alert(`Сумма = ${firstNumber + secondNumber}`)
  // 5
  alert(`Остаток от деления = ${firstNumber % secondNumber}`)
  // 6
  alert(
    `Префиксная: ${++firstNumber}\nПостфиксная: ${secondNumber++} <= сначала возвращается значение, и только после инкрементируется: ${secondNumber}`
  )
  // 7
  const isOdd = (number) => (number % 2 === 0 ? "Четное" : "Нечетное")
  alert(isOdd(parseInt(prompt("Введите число"))))
  // 8
  alert(
    `1 == '1': ${1 == "1"}\n0 == false: ${0 == false}\n1 === '1': ${
      1 === "1"
    }\n0 === false: ${
      0 === false
    }\nОператор "==" не сравнивает типы переменных.`
  )
  // 9
  const array = [11, "hello", { a: 1 }, null, false]
  const varType = (variable) => {
    if (typeof variable === "number") {
      return "number"
    } else if (typeof variable === "string") {
      return "string"
    } else if (typeof variable === "object") {
      return "object"
    } else if (typeof variable === "boolean") {
      return "boolean"
    } else return "undefined"
  }
  let text = ''
  for (let i = 0; i < array.length; i++) {
    text += `Тип ${array[i]}: ${varType(array[i])}\n`
  }
  alert(text)
  // 10
  const A = 201
  A % 2 ? alert(`A нечетное`) : alert(`A четное`)

  // Authorization 11
  let currentUsername, currentPassword
  const usernameInput = document.getElementById("username"),
    passwordInput = document.getElementById("password"),
    button = document.getElementById("send"),
    users = [
      {
        username: "TbIKBA",
        password: "vegetable12",
      },
      {
        username: "Semen",
        password: "april1992",
      },
      {
        username: "Artem",
        password: "1234qwer",
      },
      {
        username: "admin",
        password: "admin",
      },
    ],
    auth = () => {
      let access = false
      console.log(currentUsername, currentPassword)
      users.forEach((user) => {
        if (
          currentUsername === user.username &&
          currentPassword === user.password
        )
          access = true
      })
      return access
    },
    display = () => {
      document.getElementById("auth").style.display = "none"
      document.getElementById("main").style.display = "block"
    },
    reset = () => {
      usernameInput.value = ""
      passwordInput.value = ""
      alert("Неверное имя пользователя или пароль")
    },
    login = () => (auth() ? display() : reset())

  usernameInput.addEventListener(
    "change",
    () => (currentUsername = usernameInput.value)
  )
  passwordInput.addEventListener(
    "change",
    () => (currentPassword = passwordInput.value)
  )
  button.addEventListener("click", login)
  button.addEventListener("keydown", (el) =>
    el.key === "Enter" ? login() : false
  )
  passwordInput.addEventListener("keydown", (el) =>
    el.key === "Enter" ? login() : false
  )
  // 12
  let a = '30'
  alert(`a = '30' -> !a = ${!!a}`)
}
window.onload = () => {
  // 1

  const btn = document.querySelector('#button')
  btn.addEventListener('click', () => btn.nextElementSibling.innerHTML++)
  // 2

  document.addEventListener('scroll', () => document.querySelector('#offset').innerText = window.scrollY)
  // 3

  for (const td of document.querySelectorAll("td")) {
    td.innerText = Math.round(Math.random() * 10)
  }
  const table = document.querySelector('table')
  table.addEventListener('click', event => {
    if (event.target.tagName === 'TD') {
      event.target.innerHTML *= event.target.innerHTML
    }
  })
  // 4

  table.addEventListener('mouseover', event => {
    if (event.target.tagName === 'TD') {
      event.target.style.backgroundColor = 'red'
      event.target.style.color = 'white'
    }
  })
  table.addEventListener('mouseout', event => {
    if (event.target.tagName === 'TD') {
      event.target.style.backgroundColor = 'white'
      event.target.style.color = 'black'
    }
  })
  // 5

  const input = document.querySelector('#input')
  input.addEventListener('focusout', () => {
    if (input.value === 'Delete') {
      console.log('Deleted')
      input.value = ''
    }
  })

  // 6

  const form = document.querySelector('#form')
  form.addEventListener('focusin', event => {
    if (event.target.tagName === 'INPUT') {
      event.target.classList.add('active')
    }
  })
  form.addEventListener('focusout', event => {
    if (event.target.tagName === 'INPUT') {
      event.target.classList.remove('active')
    }
  })
  // 7

  const suicideButton = document.createElement('button'),
    container = document.querySelector('.container')
  suicideButton.innerText = 'Press me'
  suicideButton.style.height = '20px'
  suicideButton.style.alignSelf = 'center'
  suicideButton.addEventListener('click', () => suicideButton.remove())
  container.appendChild(suicideButton)
  // 8

  const ul = document.querySelector('ul')
  ul.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
      event.target.remove()
    }
  })
}
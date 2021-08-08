window.onload = () => {
  // 1

  const containerBCN = document.getElementsByClassName('container')[0],
    containerQS = document.querySelector('.container'),
    main_containerBID = document.getElementById('main_container'),
    main_containerQS = document.querySelector('#main_container')
  console.log(containerBCN, containerQS, main_containerBID, main_containerQS)
  // 2

  containerBCN.classList.add('box')
  main_containerBID.className = 'box'
  main_containerBID.id = 'main_box'
  // 3 

  const styleDiv = document.querySelector('#styleDiv')
  styleDiv.style.backgroundColor = 'orangered'
  // Если задать стили напрямую через style, то они запишутся в элемент в HTML и поломают дефолтные стили.
  // 4

  const list = document.querySelector('#list'),
    listElements = list.children
  for (let i = 0; i < listElements.length; i++) if (i % 2 === 1) {
    listElements[i].style.backgroundColor = 'lightgray'
    listElements[i].style.fontWeight = 600
  }
  // 5

  const getInputValue = (id) => document.querySelector('#' + id).value
  console.log(getInputValue('input1'))
  // 6

  const freezeInput = (className) => document.querySelector('.' + className).disabled = true
  freezeInput('radio')
  // 7 

  const span1 = document.createElement('span'),
    span2 = document.createElement('span')
  span1.className = 'lightgreen'
  span2.className = 'lightgreen'
  span1.innerText = 'Span 1'
  span2.innerText = 'Span 2'
  containerQS.appendChild(span1)
  containerQS.appendChild(span2)
  // 8

  const insertTextContent = (id, text) => document.querySelector('#' + id).textContent = text,
    insertInnerText = (id, text) => document.querySelector('#' + id).innerText = text
  insertTextContent('main_box', 'Inserted text')
  insertInnerText('styleDiv', 'Inserted text')
  // 9

  list.firstElementChild.style.color = 'red'
  // 10

  list.firstElementChild.nextElementSibling.nextElementSibling.innerText += '!!!'
}
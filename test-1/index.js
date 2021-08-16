const nullElement = document.querySelector('#null'),
  tooltip = document.querySelector('#tooltip')
nullElement.addEventListener('click', () => 
  tooltip.style.visibility === '' || tooltip.style.visibility === 'hidden' ?
  tooltip.style.visibility = 'visible' :
  tooltip.style.visibility = 'hidden'
)
document.querySelector('#addNew').addEventListener('click', () => {
  const newRow = document.createElement('tr'),
    name = document.createElement('td'),
    type = document.createElement('td'),
    length = document.createElement('td'),
    defaultEl = document.createElement('td'),
    nullEl = document.createElement('td'),
    tbody = document.querySelector('tbody')
  name.innerHTML = '<input type="text">'
  type.innerHTML = '<select><option value="int">INT</option><option value="varchar">VARCHAR</option><option value="symbol">SYMBOL</option><option value="char">CHAR</option></select>'
  length.innerHTML = '<input type="number">'
  defaultEl.innerHTML = '<select><option value="yes">Да</option><option value="no">Нет</option></select>'
  nullEl.innerHTML = '<input type="checkbox">'
  newRow.appendChild(name)
  newRow.appendChild(type)
  newRow.appendChild(length)
  newRow.appendChild(defaultEl)
  newRow.appendChild(nullEl)
  tbody.appendChild(newRow)
  window.scrollTo(0, document.body.scrollHeight)
})
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let f = document.querySelector('form')
  
  f.addEventListener('submit', (e) => {
    e.preventDefault()
    //console.log(e.target['new-task-description'].value)
    buildToDo(e.target['new-task-description'].value)
    f.reset() // resetting text box 
  })
});

function buildToDo(todo){
  // creating elements
  let p = document.createElement('p')
  let newButton = document.createElement('button')
  newButton.addEventListener('click', handleDelete) // event listener on button
  newButton.textContent = ' x'
  p.textContent = `${todo} `
  p.appendChild(newButton)
  document.querySelector('#list').appendChild(p) // appending element
}

function handleDelete(e) {
  e.target.parentNode.remove() // removing element if x clicked
}
// create element first
const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS'

// select location where you want to put it
// and append it in the end
document.querySelector('body').appendChild(myNewPara)
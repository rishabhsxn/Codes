// inserting, deleting and updating values in local storage
// values are saved in format of key-value pairs

localStorage.setItem('hero','thor')
localStorage.setItem('hero2','spiderman')
localStorage.setItem('hero3','batman')

localStorage.removeItem('hero')

var myHero1 = localStorage.getItem('hero')
var myHero2 = localStorage.getItem('hero2')
var myHero3 = localStorage.getItem('hero3')

console.log(myHero1)
console.log(myHero2)
console.log(myHero3)

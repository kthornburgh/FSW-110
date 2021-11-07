var header1 = document.querySelector('h1')
header1.textContent = "Welcome to my JS site"

var para1 = document.createElement('p')
para1.textContent = "All of this was created with Javascript"
document.body.appendChild(para1)

var listItem1 = document.createElement('li')
listItem1.textContent = 'first'
var listItem2 = document.createElement('li')
listItem2.textContent = 'second'
var listItem3 = document.createElement('li')
listItem3.textContent = 'third'
var myList = document.getElementById('myList')
myList.appendChild(listItem1)
myList.appendChild(listItem2)
myList.appendChild(listItem3)

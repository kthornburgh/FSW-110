function getInfo() {

var fname = document.getElementsByName('firstName').value;
var lname = document.getElementsByName('lastName').value;
var age = document.getElementsByName('age').value;
var dob = document.getElementsByName('dob').value;
var street = document.getElementsByName('street').value;
var city = document.getElementsByName('city').value;
var state = document.getElementsByName('state').value;
var zip = document.getElementsByName('zipCode').value;
var result = document.getElementById('result');

if (fname.length < 2) {
    result.textContent = 'Username must contain at least 2 characters';
    alert('Username must contain at least 3 characters');}
else { result.textContent = fname + lname + age + dob + street + city + state + zip;
}}
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getInfo, false)
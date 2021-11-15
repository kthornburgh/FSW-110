for (var i=0; i<5; i++){
    var h = document.createElement('H2');
    var headText = document.createTextNode("Don't Repeat Yourself");
    h.appendChild(headText)
    document.body.appendChild(h)
}

var match = document.querySelectorAll("H2")[0].setAttribute('id','headers');
var tag = document.getElementById('headers');

//for (var i=0; i< 5; i++){

    tag.style.fontSize = '20px'
    tag.style.fontWeight = 'lighter'
    tag.style.fontFamily = 'sans-serif'
    tag.style.color = "cornflowerblue" 
//}

document.getElementsByClassName('border').classList.add('myBorder')

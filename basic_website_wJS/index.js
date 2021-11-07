var a = document.createElement('a');
var b = document.createElement('a');
var link1 = document.createTextNode('KT Media FB Page');
var link2 = document.createTextNode('Instagram Page')

a.title = 'Click Here for KT Media';
a.href = 'https://www.facebook.com/ktmediapro';
document.body.appendChild(a);
a.appendChild(link1);

b.title = 'Click Here for Instagram';
b.href = 'https://www.instagram.com/k.a.thornburgh/';
document.body.appendChild(b);
b.appendChild(link2);

var h = document.createElement('H1');
var header = document.createTextNode('Keith Thornburgh');
h.appendChild(header);
document.body.appendChild(h);

var p = document.createElement('p');
var para = document.createTextNode('This is my page');
p.appendChild(para);
document.body.appendChild(p);

var l = document.createElement('ul');
var i = document.createElement('li');
var j = document.createElement('li');
var k = document.createElement('li');
var w = document.createTextNode('One');
var x = document.createTextNode('Two');
var y = document.createTextNode('Three');

i.appendChild(w);
j.appendChild(x);
k.appendChild(y);
l.appendChild(i);
l.appendChild(j);
l.appendChild(k);
document.body.appendChild(l);

var footer = document.createElement('footer');
var theText = document.createTextNode('This is my footer');
footer.appendChild(theText);
document.body.appendChild(footer)
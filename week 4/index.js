document.getElementById('page').addEventListener("load", function() {
    document.getElementById("square").style.backgroundColor = "black";
});

document.getElementById("square").addEventListener("mouseover", function() {
    document.getElementById("square").style.backgroundColor = "green";
});
    
document.getElementById("square").addEventListener("mouseout", function() {
    document.getElementById("square").style.backgroundColor = "white";
});

document.getElementById("square").addEventListener("mousedown", function() {
    document.getElementById("square").style.backgroundColor = "yellow";
});
    
document.getElementById("square").addEventListener("mouseup", function() {
    document.getElementById("square").style.backgroundColor = "blue";
});

document.getElementById("square").addEventListener("dblclick", function() {
    document.getElementById("square").style.backgroundColor = "red";
});

document.getElementById("page").addEventListener("wheel", function() {
    document.getElementById("square").style.backgroundColor = "purple";
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'r') {
        document.getElementById("square").style.backgroundColor = "red"
    }
    else if (event.key === 'g') {
        document.getElementById("square").style.backgroundColor = "green"
    }
    else if (event.key === 'y') {
        document.getElementById("square").style.backgroundColor = "yellow"
    }
    else if (event.key === 'b') {
        document.getElementById("square").style.backgroundColor = "blue"
    }
    else if (event.key === 'p') {
        document.getElementById("square").style.backgroundColor = "purple"
    }
});






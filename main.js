var usrButton = document.querySelector('#usr-button');
var myName;
function setUserName() {
    myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    document.querySelector('#usr').textContent = "Current User: " + myName        
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    myName = localStorage.getItem('name');
    document.querySelector('#usr').textContent = "Current User: " + myName        
}

usrButton.onclick = function() {
    setUserName();
}

var image = document.querySelector("#you") 
image.onclick = function() {
    if(image.clientWidth<420) {
        image.width = image.clientWidth*1.2;
        image.height = image.clientHeight*1.2;
    } else {
        image.width = 550;
        image.height = 660;
        document.querySelector('h1').textContent = "Congratulations, "  + myName;
        alert("You did it!");
    }
}

var retryButton = document.querySelector('#retry-button');
retryButton.onclick = function() {
    image.width = "50"
    image.height = "60"
}
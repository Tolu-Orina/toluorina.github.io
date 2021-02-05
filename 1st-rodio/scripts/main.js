let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/images6789.jpg') {
    myImage.setAttribute('src', 'images/images789.jpg');
  } else {
    myImage.setAttribute('src', 'images/images6789.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername(){
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUsername();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Toluorina is Great,  + ${myName}`;
  }
}
if (!localStorage.getItem('name')) {
  setUsername();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Toluorina is Great, ' + storedName;
}
myButton.onclick = function () {
  setUsername();
}

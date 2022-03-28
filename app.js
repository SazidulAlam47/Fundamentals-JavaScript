//module 18 lecture 5

let heading = document.getElementsByTagName('h1');

for (let i = 0; i < heading.length; i++) {
    let element = heading[i];
    element.style.color = '#4545ff';
}

function cngTxt() {
    let para = document.getElementById('para');
    para.innerText = 'You have been changed!!!';
    para.style.color = 'red';
    para.style.fontSize = '35px';
}

function cng() {
    let box = document.getElementsByClassName('box');
    for (let i = 0; i < box.length; i++) {
        const element = box[i];
        element.style.backgroundColor = 'yellow';
    }
}

let specialHeading = document.querySelector('.box-special h1');
specialHeading.style.color = 'green';

let specialPara = document.querySelectorAll('.box-special p');
for (let i = 0; i < specialPara.length; i++) {
    const element = specialPara[i];
    element.style.backgroundColor = 'lightblue';
}
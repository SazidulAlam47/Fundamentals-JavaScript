function changeBackground() {
    document.body.style.backgroundColor = 'tomato';
}
function revertBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}


let btn1 = document.getElementById('btn-1');
btn1.onclick = changeBackground;
btn1.ondblclick = revertBackgroundColor;


let heading = document.getElementById('head');
heading.onmouseover = function(){
    heading.style.color = 'red';
};

document.getElementById('btn-2').addEventListener('click', function(){
    document.body.style.color = 'green';
})



let hackText = document.createElement('span');
    hackText.innerHTML = 'You have been hacked';
    hackText.style.backgroundColor = 'red';
    hackText.style.color = 'white';

let para = document.getElementsByTagName('p');
for (let i = 0; i < para.length; i++) {
    let element = para[i];
    console.log(element);
    element.appendChild(hackText);
}

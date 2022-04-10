/*
document.getElementById('first').addEventListener('click', function(){
    console.log('first clicked');
    event.stopPropagation();
})
document.getElementById('list').addEventListener('click', function(){
    console.log('list clicked');
})
document.getElementById('container').addEventListener('click', function(){
    console.log('container clicked');
})
*/
/*
let allItems = document.getElementsByClassName('item');
for (let i = 0; i < allItems.length; i++) {
    let item = allItems[i];
    item.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);
    })
}
*/
document.getElementById('new-item').addEventListener('click', function(){
    let newItem = document.createElement('li');
    newItem.innerHTML = 'simply dummy text of the printing and typesetting industry';
    newItem.setAttribute('class', 'item'); 
    document.getElementById('list').appendChild(newItem);
})

document.getElementById('list').addEventListener('click', function(event){
    console.log(this, event.target);
    this.removeChild(event.target)
})
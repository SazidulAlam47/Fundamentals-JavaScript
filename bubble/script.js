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
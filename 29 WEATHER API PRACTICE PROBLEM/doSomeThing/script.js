async function loadData(){
    const response = await fetch('https://www.boredapi.com/api/activity/');
    const data = await response.json();

    doSomeThing(data);
}
loadData();

function doSomeThing(data){
    console.log(data);
    const work = document.createElement('div');
    work.setAttribute('class', 'card');
    work.innerHTML = `
        <h1>${data.activity}</h1>
        <p>${data.type}</p>
        <h3>Cost: $ ${data.price} </h3>
    `;
    if(data.link !== ''){
        const theLink = document.createElement('a');
        theLink.innerHTML = 'Click here to learn more';
        theLink.setAttribute('href', data.link);
        theLink.setAttribute('target', '_blank');
        work.appendChild(theLink);
    }
    document.body.appendChild(work);

}
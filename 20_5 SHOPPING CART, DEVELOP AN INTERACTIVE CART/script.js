let plusIcons = document.querySelectorAll('.cart-item .fas.fa-plus');
for (let index = 0; index < plusIcons.length; index++) {
    const plusIcon = plusIcons[index];
    const plusBtn = plusIcon.parentNode;
    plusBtn.addEventListener('click', function(){
        const productCount = plusBtn.parentNode.childNodes[3];
        let productCountNumber = parseFloat(productCount.value);
        productCountNumber++;
        productCount.value = productCountNumber;
    })
    console.log(plusBtn.parentNode.parentNode);
}

let minusIcons = document.querySelectorAll('.cart-item .fas.fa-minus');
for (let index = 0; index < minusIcons.length; index++) {
    const minusIcon = minusIcons[index];
    const minusBtn = minusIcon.parentNode;
    minusBtn.addEventListener('click', function(){
        const productCount = minusBtn.parentNode.childNodes[3];
        let productCountNumber = parseFloat(productCount.value);
        if (productCountNumber > 0) productCountNumber--;
        productCount.value = productCountNumber;
    })
}
function plusMinusCount(btnId, countId, plusOrMinus, pirceId, unitPrice){
    document.getElementById(btnId).addEventListener('click', function(){
        // update count
        const count = document.getElementById(countId);
        let countNumber = parseInt(count.value);
        if(plusOrMinus == 'plus') {
            countNumber++;
        }
        else if(plusOrMinus == 'minus'){
            if(countNumber > 0) countNumber--;
        }
        count.value = countNumber;

        //update the product price
        let productPriceNumber = unitPrice * countNumber;
        console.log(productPriceNumber);
        document.getElementById(pirceId).innerText = productPriceNumber;

        // update total price
        const phonePrice = document.getElementById('phone-price');
        const casePirice = document.getElementById('case-price');
        const subtotalPrice = document.getElementById('subtotal-price');
        subtotalPrice.innerText = parseInt(phonePrice.innerText) + parseInt(casePirice.innerText);
        const totalPrice = document.getElementById('total-price');
        totalPrice.innerText = parseInt(phonePrice.innerText) + parseInt(casePirice.innerText);
        

    })
}
plusMinusCount('case-plus', 'case-count', 'plus', 'case-price', 59);
plusMinusCount('case-minus', 'case-count', 'minus', 'case-price', 59);

plusMinusCount('phone-plus', 'phone-count', 'plus', 'phone-price', 1219);
plusMinusCount('phone-minus', 'phone-count', 'minus', 'phone-price', 1219);
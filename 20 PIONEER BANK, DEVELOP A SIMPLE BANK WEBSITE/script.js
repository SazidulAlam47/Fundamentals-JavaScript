// log in button event handler 
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    const transactionArea = document.getElementById('transaction-area');
    const emailBox = document.getElementById('email');
    const passwordBox = document.getElementById('password');
    if (emailBox.value == 'admin' && passwordBox.value == 'admin'){
        loginArea.style.display = 'none';
        transactionArea.style.display = 'block';
    }
    else{
        document.getElementById('wrong-pass').style.display = 'block';
        emailBox.style.border = '1px solid red';
        passwordBox.style.border = '1px solid red';
    }

})

function getNumber(id, type){
    let amount = null;
    if(type == 'input'){
        amount = document.getElementById(id).value;
    }
    else {
        amount = document.getElementById(id).innerText;
    }
    return parseFloat(amount);
}

function updateDollarValue(idName, inputDollar, updateDollarOperator) {
    let currentDollar = getNumber(idName, 'span');
    if(updateDollarOperator == 'addDollar'){
        currentDollar += inputDollar;
    }
    else if(updateDollarOperator == 'subtractDollar'){
        currentDollar -= inputDollar;
    }
    document.getElementById(idName).innerText = currentDollar;
}

function updateDollarBox(btnId, amountId, currentBoxDollar, updateDollarOperator, theForm) {
    const ClickBtn = document.getElementById(btnId);
    ClickBtn.addEventListener('click', function(){
        const transactionAmount = getNumber(amountId, 'input');
        
        updateDollarValue(currentBoxDollar, transactionAmount, 'addDollar');
        updateDollarValue('current-balance', transactionAmount, updateDollarOperator);

        document.getElementById(theForm).reset();
    })
}

updateDollarBox('depositBtn', 'deposit-amount', 'current-deposit', 'addDollar', 'deposit-form');
updateDollarBox('withdrawBtn', 'withdraw-amount', 'current-withdraw', 'subtractDollar', 'withdraw-form');

 
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

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
function getSpanNumber(id){
    const amount = document.getElementById(id).innerText;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateDollarValue(idName, inputDollar, updateDollarFunction) {
    let currentDollar = getSpanNumber(idName);
    currentDollar = updateDollarFunction(currentDollar, inputDollar)
    document.getElementById(idName).innerText = currentDollar;
}
function addDollar(currentDollar, inputDollar) {
    return currentDollar + inputDollar;
}
function subtractDollar(currentDollar, inputDollar) {
    return currentDollar - inputDollar;
}

function updateDollarBox(btnId, amountId, currentBoxDollar, updateDollarFunction, theForm) {
    const ClickBtn = document.getElementById(btnId);
    ClickBtn.addEventListener('click', function(){
        const transactionAmount = getInputNumber(amountId);
        
        updateDollarValue(currentBoxDollar, transactionAmount, addDollar);
        updateDollarValue('current-balance', transactionAmount, updateDollarFunction);

        document.getElementById(theForm).reset();
    })
}

updateDollarBox('depositBtn', 'deposit-amount', 'current-deposit', addDollar, 'deposit-form');
updateDollarBox('withdrawBtn', 'withdraw-amount', 'current-withdraw', subtractDollar, 'withdraw-form');

 
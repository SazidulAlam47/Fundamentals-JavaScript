function callBackTest(num1, num2, task) {
    console.log(`Number1 = ${num1}, Number2 = ${num2}`);
    let result = task(num1, num2);
    return result;
}

function add(number1, number2) {
    return number1 + number2;
}

function sub(number1, number2) {
    return number1 - number2;
}

let result = callBackTest(2, 3, add);
console.log(result);
result = callBackTest(10, 4, sub);
console.log(result);
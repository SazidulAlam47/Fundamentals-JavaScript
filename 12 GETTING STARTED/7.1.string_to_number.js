let num1 = '25';
let num2 = '15.5';

let total3 = num1 + num2;
console.log(total3);

let total = parseInt(num1) + parseFloat(num2);
console.log(total);

let total2 = Number(num1) + Number(num2);
console.log(total2);

num1 = +num1;
num2 = +num2;

console.log(`type of num1 is now "${typeof num1}" after +num1`);

total3 = num1 + num2;  
console.log(total3);
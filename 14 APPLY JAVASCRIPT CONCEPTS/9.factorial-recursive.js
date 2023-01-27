function getFactorial(number) {
    if(number <= 1) return 1;
    return number*(getFactorial(number - 1));
}

let num = 10;
let factorial = getFactorial(num);
console.log(factorial);
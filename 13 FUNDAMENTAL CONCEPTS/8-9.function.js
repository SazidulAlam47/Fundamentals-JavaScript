function getMax(num1, num2) {
    if(num1>num2) return num1;
    else return num2;
}

let list = [34, 45, 89, 56];
let max = 0;

for (let i = 0; i < list.length; i++) {
    const element = list[i];
    max = getMax(max, element)
}

console.log(max);
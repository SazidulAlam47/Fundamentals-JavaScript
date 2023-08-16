const doubleIt = num => num * 2;
const result = doubleIt(8);
console.log(result);

const add = (x, y) => x + y;
const result2 = add(24, 35);
console.log(result2);

const give5 = () => 5;
const result3 = give5();
console.log(result3);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
};
const result4 = doMath(20, 5);
console.log(result4);
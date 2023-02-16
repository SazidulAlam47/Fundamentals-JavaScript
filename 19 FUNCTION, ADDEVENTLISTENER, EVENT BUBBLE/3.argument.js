function average() {
    let addition = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        addition += element;
    }
    return addition/arguments.length;
}

let result = average(10, 20, 30, 40);
console.log(result);
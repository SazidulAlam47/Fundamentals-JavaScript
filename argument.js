function addAll() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        result += element;
    }
    return result;
}

let result = addAll(10, 20, 30, 40);
console.log(result);
function reverse(str){
    let reverseStr = '';
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        reverseStr = element + reverseStr;
    }
    return reverseStr;
}

let speech = "Hello there!";
console.log(reverse(speech));
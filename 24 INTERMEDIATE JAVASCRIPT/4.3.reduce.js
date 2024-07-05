const numbers = [260, 25, 35, 15];

numbers.reduce(function(total, num){
    console.log(total, num);
})

console.log(numbers.reduce((total, num) => total - num)); //260-25-35-15=200

console.log(numbers.reduce((total, num) => total + num)); //260+25+35+15=320

/*console.log will show 200 since the first element minus 35 and minus 25 is 260-25-35=200*/
/*while the name is "reduce", you do NOT have to subtract. Reduce() is more about "take the first element as total, and do something(whatever the function says) to it for each of the remaining elements; the remaining elements will be identified as the second parameter num for the function myFunc, you do whatever once for all remaining elements*/
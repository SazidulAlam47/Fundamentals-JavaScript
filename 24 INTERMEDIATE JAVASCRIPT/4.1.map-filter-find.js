const numbers = [3, 6, 5, 4, 7, 9];

// old fashion
const output = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

console.log(output);

console.log('---------------------');
//what is map
numbers.map(function(element, index, array){ // the Parameters can be any name, but in sequence it will give (element, index, array)
    console.log(element, index, array);
})
console.log('---------------------');

//map
const result =  numbers.map(function(x){
    return x * x;
})
console.log(result);

// map and arrow function
const result2 = numbers.map(x => x * x);
console.log(result2);

//filter
const bigger = numbers.filter( x => x > 5); //filter gives a array of all satisfied element
console.log(bigger);

//find
const isThere = numbers.find(x => x > 5); //find give the first satisfied element
console.log(isThere);

//forEach
//reduce
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(fruit){
  console.log('I want to eat a ' + fruit)
});

console.log('---------------------');
// forEach vs map
const chars = ['Hello' , 'world!!!'] ;
let retVal = chars.forEach(function(word){
  console.log("Saving to db: " + word);
})
console.log(retVal) //undefined

let lengths = chars.map(function(word){
  return word.length;
}) 
console.log(lengths) //[5,8]

// map returns a array
// forEach doesn't returns anything
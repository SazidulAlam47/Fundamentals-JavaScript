let list = ['kalam', 'salam', 'balam', 'talam', 'palam'];
let last = list.pop();
console.log("last =", last);
console.log(list);
console.log(list.length);

list.push(2022);
console.log(list);
console.log(list.length);

list.shift();
console.log(list);
console.log(list.length);

list.unshift(2012);
console.log(list);
console.log(list.length);

let part = list.slice(2);
console.log("part1 =", part);

part = list.slice(2, 4);
console.log("part2 =", part);
console.log("orginal =",list);
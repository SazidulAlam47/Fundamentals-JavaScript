let list = [34, 45, 89, 56];
let max = 0;

for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if(element > max) max = element;
}

console.log(max);
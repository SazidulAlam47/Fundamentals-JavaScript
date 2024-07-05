let id = [2, 3, 4, 2, 3, 5, 6, 8, 6, 9, 3, 5, 2, 1];

let unique = [];

for (let i = 0; i < id.length; i++) {
    let element = id[i];
    if (unique.indexOf(element) == -1) {
        unique.push(element);
    }
}

console.log(unique);
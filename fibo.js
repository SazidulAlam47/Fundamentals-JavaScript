let fibonacci = [0, 1];

for (let i = 1; true; i++) {
    let nextNumbner = fibonacci[i] + fibonacci[i - 1];
    if (nextNumbner > 50) break;
    fibonacci.push(nextNumbner);
}

console.log(fibonacci);
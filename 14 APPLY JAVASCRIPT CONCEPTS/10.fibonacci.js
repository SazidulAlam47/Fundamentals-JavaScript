let fib = [0, 1];
let n = 20;

for (let i = 2; i < n; i++) {
    let next = fib[i-1] + fib[i-2];
    fib.push(next);
}

console.log(fib);
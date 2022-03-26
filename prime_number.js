function isPrime(n) {
    let i;
    if (n < 2) {
        return false;
    }
    if (n == 2) {
        return true;
    }
    if (n % 2 == 0) {
        return false;
    }
    for (i = 3; i <= n / 2; i+=2) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(61));
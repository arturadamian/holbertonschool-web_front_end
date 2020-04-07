let countPrimeNumbers = () => {
    let sieve = []; 
    let count = 0;
    for (let i = 2; i <= 100; ++i) {
        if (!sieve[i]) count += 1;
        for (let j = i << 1; j <= 100; j += i) {
            sieve[j] = true;
        }
    }
    return count;
}
var t0 = performance.now()
for (let i = 0; i < 100; i++) countPrimeNumbers();
var t1 = performance.now()
console.log('Execution time of calculating prime numbers 100 times was ' + (t1 - t0) + ' milliseconds')

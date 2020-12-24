// The number, 197, is called a circular prime because all rotations of the digits: 
// 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?

// function isPrime(n) {
//     if (n === 1) {
//       return false;
//     } else if (n === 2) {
//       return true;
//     } else {
//       for (let x = 2; x < n; x++) {
//         if (n % x === 0) {
//           return false;
//         }
//       }
//       return true;
//     }
//   }


function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // maybe another if to determine if it is a circular prime??
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

let primes = getPrimes(1000000)

  console.log(Object.keys(primes).length);
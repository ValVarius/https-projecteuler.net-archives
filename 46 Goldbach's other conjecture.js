// It was proposed by Christian Goldbach that every odd composite number can be written
// as the sum of a prime and twice a square.

// 9 = 7 + 2×12
// 15 = 7 + 2×22
// 21 = 3 + 2×32
// 25 = 7 + 2×32
// 27 = 19 + 2×22
// 33 = 31 + 2×12

// It turns out that the conjecture was false.

// What is the smallest odd composite that cannot be written
// as the sum of a prime and twice a square?

const isPrime = (n) => {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
};

const checkGoldbach = (num) => {
  for (let i = 1; i < num - 1; i++) {
    if (isPrime(i)) {
      for (let y = 1; y < Math.sqrt(num).toFixed(0); y++) {
        if (i + 2 * Math.pow(y, 2) === num) return true;
      }
    }
  }

  return false;
};
const isOdd = (num) => {
  if (num % 2 === 0) return false;

  return true;
};

let result;
let i = 2;

while(!result){

    if(isOdd(i) && !isPrime(i)){

        if(!checkGoldbach(i)){

            result = i;
        }
    }
    i++;
}


console.log(result);
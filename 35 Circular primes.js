// The number, 197, is called a circular prime because all rotations of the digits:
// 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?

function getPrimes(max) {
  var sieve = [],
    i,
    j,
    primes = [];
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

const rotate = (num) => {
  let rotation = num;

  rotation.push(rotation[0]);
  rotation.shift();

  return rotation;
};

function isPrime(n) {
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
}

let primes = getPrimes(999999);

let len = Object.keys(primes).length;
// console.log(len);
let rotations = []
let total = 0;
for (let i = 0; i < len; i++) {
  var num = [...primes[i].toString()];

  let row = []

  for (let i = 0; i < num.length; i++) {

    row = []
    
    num = rotate(num);
    // console.log("before" ,row);
    
    for (let j = 0; j < num.length; j++) {

        row.push(num[j]);
    }

    rotations.push(row);
    // console.log("after", row);
    
  }
//   console.log("THIS IS THE ROTATIONS:" , rotations);
  let circular = true;

  for (let y = 0; y < rotations.length; y++) {
    let number = parseInt(rotations[y].join(""));
    // console.log(rotations[0].join(""), "   ", rotations[y].join(""));

    if (!primes.includes(number)) {
      if (!isPrime(number)) {
        // console.log(number, " is not prime");
        circular = false;
        break;
      }
    }
  }

  if (circular) {
    total++;
    // console.log(rotations);
  }
  rotations = [];
}

console.log("Total: ", total);

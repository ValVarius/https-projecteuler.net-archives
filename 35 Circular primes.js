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
var permArr = [],
  usedChars = [];

function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr;
}

function isPrime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(let x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}


let primes = getPrimes(999999);

let len = Object.keys(primes).length;
// console.log(len);
let permutations;
let total = 0;
for (let i = 0; i < len; i++) {
  let num = [...primes[i].toString()];
  permutations = permute(num);
  permArr = [];
  let circular = true;

  for (let y = 0; y < permutations.length; y++) {
    let number = parseInt(permutations[y].join(""));
    console.log((permutations[0].join("")), "   ",(permutations[y].join("")));

    if (!primes.includes(number)) {
      if (!isPrime(number)) {
          console.log(number, " is not prime");
        circular = false;
        break;
      }
    }
  }

  if (circular) {
    total++;
    // console.log(permutations);
  }
  permutations = [];
}

console.log("Total: ", total);

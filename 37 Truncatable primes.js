// The number 3797 has an interesting property. Being prime itself,
//  is possible to continuously remove digits from left to right,
//  and remain prime at each stage: 3797, 797, 97, and 7.
//  Similarly we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both
// truncatable from left to right and right to left.

// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

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
const check = (num) => {
  let n = num.toString();
//   console.log(n);
  if (!isPrime(num)) return false;

  for (let i = 0; i < n.length; i++) {
    if (!isPrime(parseInt(n.charAt(0)))) return false;
    if (!isPrime(parseInt(n.substring(i)))) return false;
    if (!isPrime(parseInt(n.substring(0, n.length - i)))) return false;
  }

//   console.log(`Found ${n}`);

  return true;
};

let follow = [1, 3, 7, 9];
let base = [2, 3, 5, 7];
let truncatables = [];
let total = 0;

while (base.length > 0 && truncatables.length < 11) {
  for (let i = 0; i < base.length; i++) {
    for (let y = 0; y < follow.length; y++) {
      let num = parseInt(`${base[i]}${follow[y]}`);
      if (isPrime(num)) {

        if (check(num)) {
          truncatables.push(num);
          total += num;
        }
        base.push(num);
      }
      if (y === follow.length - 1) {
        base.splice(i, 1);
      }
    }
  }

}

console.log(truncatables);
console.log(total);




// Brute Force Version
// let number = 10

// while(truncatables.length < 11){
//     if ( check(number) ) {

//         truncatables.push(number);
//         total += number;
//     }
//     number++;

// }

// console.log(truncatables);
// console.log(total);

// creates a base of numbers
// for (let i = 0; i < begin.length; i++) {
//   for (let y = 0; y < follow.length; y++) {
//     let num = parseInt(`${begin[i]}${follow[y]}`);
//     if (isPrime(num)) {
//       base.push(num);

//       if (check(num)) {
//         truncatables.push(num);
//         total += num;
//       }
//     }
//   }
// }



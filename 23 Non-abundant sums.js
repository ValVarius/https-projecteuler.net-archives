// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
// For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28,
//  which means that 28 is a perfect number.

// A number n is called deficient
// if the sum of its proper divisors is less than n and it is called abundant
// if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16,
// the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis,
// it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers.
// However, this upper limit cannot be reduced any further by analysis
// even though it is known that the greatest number that cannot be expressed
// as the sum of two abundant numbers is less than this limit.

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

let limit = 28123;
let abundants = [];
let allTheSums = [];
let ultimateTotal = 0;

// function returns true if number is abundant
const isAbundant = (num) => {
  let total = 0;
  for (let i = num - 1; i > 0; i--) {
    if (num % i === 0) {
      total += i;
    }
  }

  if (total > num) return true;
  else return false;
};

// If num is abundant loop pushes it into the array of abundants
for (let i = 1; i < limit; i++) {
  let abunding = isAbundant(i);
  if (abunding) {
    abundants.push(i);
  }
}

// Double loop creates an array of all the numbers produced by the sum of two abundants
for (let i = 0; i < abundants.length; i++) {
  for (let y = 0; y < abundants.length; y++) {
    if (y >= i) {
      let sum = abundants[i] + abundants[y];
      allTheSums.push(sum);
    }
  }
}

// Loop check if a number is included in the list of sums and if not is added to the ultimate total
for (let i = 1; i < limit; i++) {
  if (!allTheSums.includes(i)) {
    ultimateTotal += i;
  }
}

console.log(ultimateTotal);

// The sum of the squares of the first ten natural numbers is 385

// The square of the sum of the first ten natural numbers is 3025

// Hence the difference between the sum of the squares of the first ten natural numbers
// and the square of the sum is 2640

// Find the difference between the sum of the squares of the first one hundred natural numbers
// and the square of the sum.

const difference = (num) => {
  let sumSqaure = 0;
  let squareSum = 0;
  for (let i = 1; i <= num; i++) {
    sumSqaure += i * i;
    squareSum += i;
  }
  squareSum = squareSum * squareSum;
  return squareSum - sumSqaure;
};

console.log(difference(100));

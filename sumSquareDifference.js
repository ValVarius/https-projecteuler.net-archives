// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

let sumOfSquares = 0;
let squareOfSum = 0;


for (let i = 1; i <= 100; i++) {
    
    sumOfSquares += (i*i)
    squareOfSum += i;
}

squareOfSum = squareOfSum * squareOfSum;

let difference = squareOfSum - sumOfSquares;

console.log(sumOfSquares);
console.log(squareOfSum);
console.log(difference);
// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

let total = BigInt(100);
for (let i = 1; i < 100; i++) {
  total = total * BigInt(i);
}

total = total.toString()

let sum = 0;
for (let i = 0; i < total.length; i++) {
    let addition = parseInt(total.charAt(i))
    sum+= addition;
}
console.log(sum);

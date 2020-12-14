// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110;
// therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.

const sumOfDivisors = (num) => {
  let total = 0;
  for (let i = num - 1; i > 0; i--) {
    if (num % i === 0) {
      total += i;
    }
  }

  return total;
};

let amicable = [];

for (let i = 0; i < 10000; i++) {
  let sum = sumOfDivisors(i);

  ami = sumOfDivisors(sum);

  if (ami === i && i !== sum) {
    amicable.push(i);
  }
}

console.log(amicable);
console.log(amicable.reduce((a, b) => a + b));

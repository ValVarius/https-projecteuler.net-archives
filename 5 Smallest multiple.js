// 2520 is the smallest number that can be divided
// by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible
// by all of the numbers from 1 to 20?
let res = 1;
let max = 20;

const divisible = (num) => {
  for (let i = max; i > 0; i--) {
    if (num % i !== 0) return false;
  }

  return true;
};
for (let i = 2; i < max; i++) {
  res *= i;
}

// console.log(res);

let smallest;

for (let i = max; i < res; i += 20) {
  if (divisible(i)) {
    smallest = i;
    break;
  }
  //   console.log(i);
}

console.log(`SMALLEST: ${smallest}`);

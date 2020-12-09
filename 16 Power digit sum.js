// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 21000?

let num = BigInt(Math.pow(2, 1000)).toString();
let total = 0;
for (let i = 0; i < num.length; i++) {
  total += parseInt(num.charAt(i));
}

console.log(num);
console.log(total);

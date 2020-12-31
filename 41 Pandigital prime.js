// We shall say that an n-digit number is pandigital
// if it makes use of all the digits 1 to n exactly once.
// For example, 2143 is a 4-digit pandigital and is also prime.

// What is the largest n-digit pandigital prime that exists?
// 1, 3, 7, 9

let permArr = [],
  usedChars = [];

const permute = (input) => {
  let i, ch;
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
};
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

let digits = [1, 2, 3, 4, 5, 6, 7,8,9];
let permutations = permute(digits);
let max = 0;

loop1:
while (permutations.length > 0) {
  for (let i = 0; i < permutations.length; i++) {
    if (
      permutations[i][permutations[i].length - 1] === 1 ||
      permutations[i][permutations[i].length - 1] === 3 ||
      permutations[i][permutations[i].length - 1] === 7 ||
      permutations[i][permutations[i].length - 1] === 9
    ) {
      let num = permutations[i].join("");
      if (isPrime(parseInt(num))) {
        if(num > max){
            max = num
            
        }
      }
    }
  }

  if(max>0) break loop1;
  digits.pop();

  permutations = permute(digits);
}

console.log(`Largest Prime Pandigital: ${max}`);

// The number, 1406357289, is a 0 to 9 pandigital number because
//  it is made up of each of the digits 0 to 9 in some order,
//  but it also has a rather interesting sub-string divisibility property.

// Let d1 be the 1st digit, d2 be the 2nd digit, and so on.
// In this way, we note the following:

// d2d3d4=406 is divisible by 2
// d3d4d5=063 is divisible by 3
// d4d5d6=635 is divisible by 5
// d5d6d7=357 is divisible by 7
// d6d7d8=572 is divisible by 11
// d7d8d9=728 is divisible by 13
// d8d9d10=289 is divisible by 17
// Find the sum of all 0 to 9 pandigital numbers with this property.

const checkDivisibility = (input) => {
  if (parseInt("" + input[7] + input[8] + input[9]) % 17 !== 0) {
    return false;
  }
  if (parseInt("" + input[6] + input[7] + input[8]) % 13 !== 0) {
    return false;
  }
  if (parseInt("" + input[5] + input[6] + input[7]) % 11 !== 0) {
    return false;
  }
  if (parseInt("" + input[4] + input[5] + input[6]) % 7 !== 0) {
    return false;
  }

  if (parseInt("" + input[3] + input[4] + input[5]) % 5 !== 0) {
    return false;
  }
  if (parseInt("" + input[2] + input[3] + input[4]) % 3 !== 0) {
    return false;
  }

  if (parseInt("" + input[1] + input[2] + input[3]) % 2 !== 0) {
    return false;
  }

  return true;
};
let total = 0;
let usedChars = [];

const permute = (input) => {
  let i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      if (checkDivisibility(usedChars.slice())) {
        total += parseInt(
          "" +
            usedChars[0] +
            usedChars[1] +
            usedChars[2] +
            usedChars[3] +
            usedChars[4] +
            usedChars[5] +
            usedChars[6] +
            usedChars[7] +
            usedChars[8] +
            usedChars[9]
        );
      }
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return;
};

let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
permute(digits);

console.log(total);

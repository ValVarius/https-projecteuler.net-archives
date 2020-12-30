// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

let max = 999 * 999;
let min = 111 * 111;
let result;

const isPalindrome = (num) => {
  let number = num.toString();
  let reverse = number.split("").reverse().join("");

  if (number === reverse) return true;

  return false;
};

loop1: while (max >= min) {
  if (isPalindrome(max)) {
    let divisor = 999;
    // console.log(`Palindrome ${max}`);

    while (divisor > 111) {
      let res = (max / divisor).toString();

      if (max % divisor === 0) {
        if (res.length > 3) break;

        // console.log(`Divisor is: ${divisor}`);
        // console.log(`Res is ${res}`);
        result = max;
        break loop1;
      } else {
        divisor--;
      }
    }
  }

  max--;
}

if (!result) result = `value not found`;
else console.log(result);

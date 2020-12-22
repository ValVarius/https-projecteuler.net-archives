// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

// The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

// Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

// HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

var permArr = [],
  usedChars = [],
  total = 0;

const isPandigital = (num) => {
  //   num = num.toString();
  //  xx * xxx = xxxx format
  let factor1 = num.substring(0, 2);
  let factor2 = num.substring(2, 5);
  let product = num.substring(5);

  //   console.log(parseInt(factor1) * parseInt(factor2), " ", product );

  if (parseInt(factor1) * parseInt(factor2) === parseInt(product)) return true;

  //  x * xxxx = xxxx format
  factor1 = num.substring(0, 1);
  factor2 = num.substring(1, 5);
  product = num.substring(5);

  if (parseInt(factor1) * parseInt(factor2) === parseInt(product)) return true;

  return false;
};

function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      let pandigit = "";
      usedChars.slice().forEach((element) => {
        pandigit += element.toString();
      });
      //   console.log(pandigit);

      if (isPandigital(pandigit)) {
        let sum = parseInt(pandigit.substring(5));
        if (!permArr.includes(sum)) {
            permArr.push(sum);
            total+=sum;

        }
      }
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr;
}
permute([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(permArr);
console.log(total);

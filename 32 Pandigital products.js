// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

// The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

// Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

// HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

// CALCULATE THE PERMUTATIONS OF THREE NUMBERS IN THE ARRAY FROM1 TO 9

// let list;

// function factorial(x){
//     // validating the input
//     x = parseInt(x, 10);
//     if (isNaN(x)) return 1;

//     // if x below 0, return 1
//     if (x <= 0) return 1;
//     // if x above 170, return infinity
//     if (x > 170) return Infinity;
//     // calculating the factorial
//     let y = 1;
//     for (let i = x; i>0; i--){
//         y *= i;
//     }
//     return y;
// }

// list = factorial(9) / factorial(6)

// console.log(list);

function* combinations(n, k) { 
    if (k < 1) {
      yield [];
    } else {
      for (let i = k; i <= n; i++) {
        for (let tail of combinations(i - 1, k - 1)) {
          tail.push(i);
          yield tail;
        }
      } 
    }
  }
  
  let result= []
  Example:
  for (let combination of combinations(9, 3)) { 
    // console.log(combination);
    result.push(combination)
  }



// console.log(result);

var permArr = [],
  usedChars = [];

function permute(input) {
  var i, ch;
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
  return permArr
}

// permute(result[0])

// console.log(permArr);


// console.log(permute(result[1]));
// console.log(permute(result[2]));
// console.log(permute(result[90]));
// console.log(permute(result));

let list = [];

result.forEach(element => {
    permArr = []
    permute(element)
    list = [...list, ...permArr]
});

// console.log(list[0]);
// list = list[0]

console.log(list[503]);



// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

// The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

// Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

// HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

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

let firstfactor = [];
// CALCULATE THE PERMUTATIONS OF THREE NUMBERS IN THE ARRAY FROM1 TO 9

// theese results will serve as the first factor
for (let combination of combinations(9, 3)) {
  firstfactor.push(combination);
}
// console.log(firstfactor);
var permArr = [],
  usedChars = [];
// for each permutation add all its combinations
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
  return permArr;
}

let list = [];

firstfactor.forEach((element) => {
  permArr = [];
  permute(element);
  list = [...list, ...permArr];
});

firstfactor = list;

// Now let's find all permutations fro the second factor
let secondfactor = [];
list = [];
permArr = [];
usedChars = [];

for (let combination of combinations(9, 2)) {
  secondfactor.push(combination);
}

secondfactor.forEach((element) => {
  permArr = [];
  permute(element);
  list = [...list, ...permArr];
});

secondfactor = list;

console.log(firstfactor.length);
console.log(secondfactor.length);

// function to check if all numbers are present

const allThere = (fact1, fact2, prod) => {
  prod = prod.toString();

  let all = fact1 + fact2 + prod;

  if (all.split("").sort().join("").trim() === "123456789") return true;

  return false;
};

let sumOfProducts = [];
let sum = 0;

for (let i = 0; i < firstfactor.length; i++) {
  for (let y = 0; y < secondfactor.length; y++) {
    let first = "";
    let second = "";
    firstfactor[i].forEach((element) => {
      first += element.toString();
    });
    secondfactor[y].forEach((element) => {
      second += element.toString();
    });

    let product = parseInt(first) * parseInt(second);

    if (allThere(first, second, product)) {
      if (!sumOfProducts.includes(product)) {
        sumOfProducts.push(product);
        sum += product;
      }
      //   console.log(first, second, product);
    }
  }
}

console.log(sumOfProducts);
console.log(sum);

// Now let's find all permutations for a four number factor
let factorOfFour = [];
list = [];
permArr = [];
usedChars = [];

for (let combination of combinations(9, 4)) {
  factorOfFour.push(combination);
}

factorOfFour.forEach((element) => {
  permArr = [];
  permute(element);
  list = [...list, ...permArr];
});

factorOfFour = list;

// console.log(factorOfFour.length);

for (let i = 0; i < factorOfFour.length; i++) {
  for (let y = 1; y < 9; y++) {
    let first = "";
    let second = "";
    factorOfFour[i].forEach((element) => {
      first += element.toString();
    });

    second = y;

    let product = parseInt(first) * second;

    if (allThere(first, second, product)) {
      if (!sumOfProducts.includes(product)) {
        sumOfProducts.push(product);
        sum += product;
      }
      //   console.log(first, second, product);
    }
  }
}

console.log(sumOfProducts);
console.log(sum);

console.log("RSS ", process.memoryUsage().rss / (1024 * 1024), " MB");
console.log(
  "HEAP TOTAL ",
  process.memoryUsage().heapTotal / (1024 * 1024),
  " MB"
);
console.log(
  "HEAP USED ",
  process.memoryUsage().heapUsed / (1024 * 1024),
  " MB"
);
console.log("EXTERNAL ", process.memoryUsage().external / (1024 * 1024), " MB");

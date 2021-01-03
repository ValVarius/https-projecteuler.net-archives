// Pentagonal numbers are generated by the formula,
// Pn=n(3n−1)/2. The first ten pentagonal numbers are:

// 1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

// It can be seen that P4 + P7 = 22 + 70 = 92 = P8.
// However, their difference, 70 − 22 = 48, is not pentagonal.

// Find the pair of pentagonal numbers, Pj and Pk,
// for which their sum and difference are pentagonal and
// D = |Pk − Pj| is minimised; what is the value of D?

const isPentagonal = (num) => {
  let result = (-1 * -1 + Math.sqrt(1 - 4 * 3 * (-2 * num))) / (2 * 3);
//   console.log(result);
  if (Number.isInteger(result)) {
    return true;
  }

  return false;
};
let found = false;
let pentagonals = [1];
let n = 1;
let first;
let second;

while (!found) {
  let current = (n * (3 * n - 1)) / 2;
//   console.log(current);
  for (let i = 0; i < pentagonals.length; i++) {

    // console.log(i);
        if(isPentagonal(current - pentagonals[i]) && isPentagonal(current + pentagonals[i])){
            found = true
            first = current - pentagonals[i];
            second = current + pentagonals[i]
        }
        else if(isPentagonal(pentagonals[i]- current) && isPentagonal(pentagonals[i]+current)){
            found = true
            first = current;
            second = pentagonals[i]
        }


        
  }
pentagonals.push(current)
n++;

}

console.log(first + "   " + second);
console.log(first + second);
console.log(first - second);
// Math.abs(-7.25);
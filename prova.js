const factors = (number) =>
  [...Array(number + 1).keys()].filter((i) => number % i === 0 && isPrime(i));
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
const checkUnique = (a) => {
  // write a function that takes 4 arrays and returns true if each arrays contains four unique numbers

  if (a.length < 3) return false;
  for (let i = 0; i < a.length; i++) {
    for (let y = 0; y < a.length - 1; y++) {
      if (a[i] === a[y] && i !== y) {
        a.splice(i, 1);
      }

      if (a.length < 3) return false;
    }
  }

  return true;
};
let found = false;
let num = 0;
let result;

while (!found) {
  num++;
  // console.log(num);

  let a = factors(num);
  console.log("a");
  console.log(a);

  if (checkUnique(a)) {
    let b = factors(num + 1);
    console.log("b");
    console.log(b);

    if (checkUnique(b)) {
      let c = factors(num + 2);
      console.log("c");
      console.log(c);

      if (checkUnique(c)) {

          console.log(num);
          result = num;
          found = true
        
      } 
    } 
  }
}

// console.log(num);
console.log("res is " + result);

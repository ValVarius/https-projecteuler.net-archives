// Take the number 192 and multiply it by each of 1, 2, and 3:

// 192 × 1 = 192
// 192 × 2 = 384
// 192 × 3 = 576
// By concatenating each product we get the 1 to 9 pandigital,
// 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

// The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5,
// giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

// What is the largest 1 to 9 pandigital 9-digit number that can be formed
// as the concatenated product of an integer with (1,2, ... , n) where n > 1?

// function takes a number and returns true if nuber is pandigital
const isPandigital = (num) => {
  let arr;
  let compare = 123456789;

  let n = num;

  arr = parseInt(
    n.toString(10).replace(/\D/g, "0").split("").map(Number).sort().join("")
  );

  if (compare === arr) {
    return true;
  }
  return false;
};

// function takes a number and return the factor that would produce a pandigital.
const check = (num) => {
  let result = "";
  for (let i = 1; i < 10; i++) {
    result = result.concat((num * i).toString());
    if (result.length > 9) return -1;
    let p = parseInt(result);
    // console.log(p);
    if (isPandigital(p) && i > 1) {
      return p;
    }
  }

  return -1;
};

// if n > 1 it must be moltiplieble by 2 without exiding 8 figures
// so the maximum first factor cannot be greater than 100000 or to many figures...
// also first factor should start with a 9...

let greatest = 0;
for (let i = 1; i < 100000; i++) {

  if (i.toString().charAt(0) === `9`) {
    let current = check(i);
    if (current > greatest) {
      greatest = current;
    }
  }
}
console.log(greatest);

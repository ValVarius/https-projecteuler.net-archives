// If p is the perimeter of a right angle triangle with integral length sides,
// {a,b,c}, there are exactly three solutions for p = 120.

// {20,48,52}, {24,45,51}, {30,40,50}

// For which value of p ≤ 1000, is the number of solutions maximised?

// function takes the value of the perimeter and returns the number of solutions if any;

const getSolutions = (num) => {
  let options = 0;
  for (let a = 3; a < num; a++) {
    let b = (num * num - 2 * a * num) / (2 * num - 2 * a);

    if (b <= 0) break;
    if (Number.isInteger(b)) {
      options++;
    }
  }

  return options / 2;
};


let greatest = -1;
let result;
for (let i = 12; i < 1000; i++) {
  let current = getSolutions(i);
  if (current > greatest) {
    greatest = current;
    result = i;
  }
}

console.log(`A Perimeter of: ${result} has ${greatest} solutions`);

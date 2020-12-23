// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

// Note: As 1! = 1 and 2! = 2 are not sums they are not included.


// Find the factorial of all number from 1 to 9
let facts = [];
let max = 0;
let results = [];
let sum = 0;
for (let i = 0; i < 10; i++) {
  facts.push(factorial(i));
  max+= factorial(i)
}



// console.log(facts);
console.log(max);

for (let i = 10; i < max; i++) {
    
    let arr = numberToArray(i);
    // console.log(arr);
    let factorialTotal = 0;
    for (let y = 0; y < arr.length; y++) {
        
        factorialTotal += facts[arr[y]] 
        
    }

    if (factorialTotal === i) {
        results.push(i);
        sum+= i;
    }

}

console.log(results);
console.log(sum);


function numberToArray(number) {
    let array = number.toString().split("");
    return array.map(x => parseInt(x));
}





function factorial(x) {
  // validating the input
  x = parseInt(x, 10);
  if (isNaN(x)) return 1;

  // if x below 0, return 1
  if (x <= 0) return 1;
  // if x above 170, return infinity
  if (x > 170) return Infinity;
  // calculating the factorial
  var y = 1;
  for (var i = x; i > 0; i--) {
    y *= i;
  }
  return y;
}


console.log("RSS ", process.memoryUsage().rss / (1024 * 1024) , " MB");
console.log("HEAP TOTAL ", process.memoryUsage().heapTotal / (1024 * 1024), " MB");
console.log("HEAP USED ", process.memoryUsage().heapUsed / (1024 * 1024), " MB");
console.log("EXTERNAL ", process.memoryUsage().external / (1024 * 1024), " MB");
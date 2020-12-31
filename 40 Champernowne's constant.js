// An irrational decimal fraction is created by concatenating the positive integers:

// 0.123456789101112131415161718192021...

// It can be seen that the 12th digit of the fractional part is 1.

// If dn represents the nth digit of the fractional part, 
// find the value of the following expression.

// d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000



let irrational = ""
for (let i = 1; i < 1000000 ; i++) {
    
    irrational = irrational.concat(i.toString())
    
}

let d1 = parseInt(irrational.charAt(0));
let d10 = parseInt(irrational.charAt(10-1));
let d100 = parseInt(irrational.charAt(100-1));
let d1000 = parseInt(irrational.charAt(1000-1));
let d10000 = parseInt(irrational.charAt(10000-1)); 
let d100000 = parseInt(irrational.charAt(100000-1));
let d1000000 = parseInt(irrational.charAt(1000000-1));

let result = d1 * d10 * d100 * d1000 * d10000 * d100000 * d1000000

console.log(result);


console.log("RSS ", (process.memoryUsage().rss / (1024 * 1024)).toFixed(2) , " MB");
console.log("HEAP TOTAL ", (process.memoryUsage().heapTotal / (1024 * 1024)).toFixed(2), " MB");
console.log("HEAP USED ", (process.memoryUsage().heapUsed / (1024 * 1024)).toFixed(2), " MB");
console.log("EXTERNAL ", (process.memoryUsage().external / (1024 * 1024)).toFixed(2), " MB");

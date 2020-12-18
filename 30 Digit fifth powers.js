// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

// 1634 = 14 + 64 + 34 + 44
// 8208 = 84 + 24 + 04 + 84
// 9474 = 94 + 44 + 74 + 44
// As 1 = 14 is not a sum it is not included.

// The sum of these numbers is 1634 + 8208 + 9474 = 19316.

// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

let allTheFifth = [];
let allSums = []
let max = 0;

let result = []

let total = 0;

for (let i = 1; i <= 9; i++) {
    
    let term = {
        
        power: Math.pow(i,5)
    }
    allTheFifth.push(term);
    
}

console.log(allTheFifth);


max = allTheFifth[8].power * 9
console.log(max);

for (let i = 2; i <= max; i++) {

    let word = i.toString();
    let tot = 0

    for (let y = 0; y < word.length; y++) {
        
        let n = parseInt(word[y])
        tot += Math.pow( n, 5)
    }
    
    if (tot===i){ 
        result.push(i);
        total += i;
    }
    
}

console.log(result);
console.log(total);
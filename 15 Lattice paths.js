// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


// How many such routes are there through a 20×20 grid?

function factorial(x){
    // validating the input
    x = parseInt(x, 10);
    if (isNaN(x)) return 1;
    
    // if x below 0, return 1
    if (x <= 0) return 1;
    // if x above 170, return infinity
    if (x > 170) return Infinity;
    // calculating the factorial
    var y = 1;
    for (var i = x; i>0; i--){
        y *= i;
    }
    return y;
}

// 2x! / x! *x!

let nominator = factorial(40) 
let denominator = factorial(20) * factorial(20)
let solution = nominator / denominator

console.log(nominator);
console.log(denominator);
console.log(solution);


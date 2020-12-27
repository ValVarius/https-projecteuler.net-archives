// The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

// Find the sum of all numbers, less than one million, 
// which are palindromic in base 10 and base 2.

// (Please note that the palindromic number, in either base, may not include leading zeros.)
const isPalindromeOnBoth = (num) => {
    let str = num.toString()
    let bi = num.toString(2)
    let isPali = true;


    str.split("").forEach((c,i) => {
        if(c!== str[str.length - 1 - i]) {
            isPali = false;
        }
    });
    bi.split("").forEach((c,i) => {
        if(c!== bi[bi.length - 1 - i]) {
            isPali = false;
        }
    });

    

    return isPali;
}

let sum = 0;

for (let i = 1; i < 1000000; i++) {
    
    if(isPalindromeOnBoth(i)){
        sum+= i
    }
    
}

console.log(sum);



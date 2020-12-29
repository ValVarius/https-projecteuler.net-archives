// The number 3797 has an interesting property. Being prime itself,
//  is possible to continuously remove digits from left to right,
//  and remain prime at each stage: 3797, 797, 97, and 7.
//  Similarly we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both
// truncatable from left to right and right to left.

// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
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

let begin = [2, 3, 5, 7];
let follow = [3, 7, 9];
let truncatables = [];
let lastBase;









const getTrunc = (num, m) =>{

    let current = num;
    let firttime = true;
    for (let y = m; y < follow.length; ) {
        if (isPrime(parseInt(`${current}${follow[y]}`))) {
          // check for left primeness?
          console.log(`Good: ${current}${follow[y]}`);
          if(y===(follow.length-1)){
            getTrunc(current, y+1);
            console.log("here");
          }
          current = `${current}${follow[y]}`; 
          truncatables.push(current);

          y = 0;
        } else {
            if(y===(follow.length-1)){
                getTrunc(current, y+1);
                console.log("here");
          console.log(`Bad: ${current}${follow[y]}`);
          y++;
        }
      }

}

for (let i = 0; i < begin.length; i++) {
  
    // if(!truncatables.lenght){
    //     lastBase = begin[i]
    // }
    // else if()
    getTrunc(begin[i],0); 

  
    
  
}

console.log(truncatables);


// 
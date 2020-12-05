// The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// Let us list the factors of the first seven triangle numbers:

//  1: 1
//  3: 1,3
//  6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.

// What is the value of the first triangle number to have over five hundred divisors?

let first;

let count = [0,1,2,3];


while (!first) {
  let num = count[(count.length-1)];

  let triangle = 0;
  
  for (let i = 0; i < count.length-1; i++) {
    triangle += count[i];
  }

  let factors = factorsNumber(triangle);
  

  if (factors >=500 ){
      first = triangle;
      console.log(factors, " ", triangle);
  }
  else{
      count.push(count[count.length-1] + 1)
  }

}


function factorsNumber (n){

    let counter = 0;
    for (let i = 1; i < n; i++) {
        if(n%i === 0){
            counter++;
        }
    }

    return counter;
}
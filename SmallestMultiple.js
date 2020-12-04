// Problem 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?





//const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const a = [1,2,3,4,5,6, 7, 8, 9, 10]

// function gcd_array(input) {
     
//     let len, a, b;
//       len = input.length;
      
//       a = input[ 0 ];
//       for ( let i = 1; i < len; i++ ) {
//           b = input[ i ];
//           a = gcd_two_numbers( a, b );
//       }
//       return a;
//   }

//   function gcd_two_numbers(x, y) {
//     while(y) {
//       var t = y;
//       y = x % y;
//       x = t;
//     }
//     return x;
//   }

//   function lcm(array) {
    
//  let lcm = a*b / gcd_array(a)
       
// }
  

//   console.log(gcd_array(a));

//   console.log(lcm(a));

function smallestMultiple(array){
    let solution = array[0];

    for (let i = 0; i < array.length; i++) {
        let multiplier = 2;
        while(solution % array[i] !== 0){
            let newSolution = solution * multiplier;
            if(newSolution % array[i] == 0){
                solution = newSolution;
            }

            multiplier++;
        }
        
        
    }

    return solution;
}

console.log(smallestMultiple(a));



  
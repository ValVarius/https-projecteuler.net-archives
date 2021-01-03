// Triangle, pentagonal, and hexagonal numbers are generated by the following formulae:

// Triangle	 	Tn=n(n+1)/2	 	1, 3, 6, 10, 15, ...
// Pentagonal	 	Pn=n(3n−1)/2	 	1, 5, 12, 22, 35, ...
// Hexagonal	 	Hn=n(2n−1)	 	1, 6, 15, 28, 45, ...
// It can be verified that T285 = P165 = H143 = 40755.

// Find the next triangle number that is also pentagonal and hexagonal.


const isPentagonal = (num) => {
    let result = (-1 * -1 + Math.sqrt(1 - 4 * 3 * (-2 * num))) / (2 * 3);
    if (Number.isInteger(result)) {
      return true;
    }
  
    return false;
  };
  const isHexagonal = (num) => {
    let result = (-1 * -1 + Math.sqrt(1 - (8 * -num))) / (2 * 2);
    
    if (Number.isInteger(result)) {
      return true;
    }
  
    return false;
  };

// if number is hexagonal is also triangular.
  let found = false;
  let i = 144;

  while(!found){

    let current = i * (2*i -1);

    if(isHexagonal(current)) {

        if(isPentagonal(current)){
        found = true;
        console.log(current);
        }
    }
    i++;
  }


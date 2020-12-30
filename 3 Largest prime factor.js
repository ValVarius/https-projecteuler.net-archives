// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?




function isPrime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(let x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

let divisor = 2;
let number = 600851475143 
let largest = 1;

while(number !== 1){

    if(number % divisor === 0){

        number = number / divisor;

        if(divisor > largest) largest = divisor
    }
    else{
        divisor++;
        while(!isPrime(divisor)) divisor++;
    }
}

console.log(largest);

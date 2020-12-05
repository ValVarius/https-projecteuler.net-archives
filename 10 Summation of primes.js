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

let sum= 0;

for (let i = 1; i < 2000000; i++) {
    
    if(isPrime(i)){
        sum+= i;
        console.log(i);
    }
}

console.log(sum);
{
  /* <p>Euler discovered the remarkable quadratic formula:</p>
<p class="center">$n^2 + n + 41$</p>
<p>It turns out that the formula will produce 40 primes for the consecutive integer values $0 \le n \le 39$. However, when $n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41$ is divisible by 41, and certainly when $n = 41, 41^2 + 41 + 41$ is clearly divisible by 41.</p>
<p>The incredible formula $n^2 - 79n + 1601$ was discovered, which produces 80 primes for the consecutive values $0 \le n \le 79$. The product of the coefficients, −79 and 1601, is −126479.</p>
<p>Considering quadratics of the form:</p>
<blockquote>
$n^2 + an + b$, where $|a| &lt; 1000$ and $|b| \le 1000$<br /><br /><div>where $|n|$ is the modulus/absolute value of $n$<br />e.g. $|11| = 11$ and $|-4| = 4$</div>
</blockquote>
<p>Find the product of the coefficients, $a$ and $b$, for the quadratic expression that produces the maximum number of primes for consecutive values of $n$, starting with $n = 0$.</p> */
}

// function solve(a, b, c) {
//     var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
//     var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
//     return result + "<br>" + result2;
// }

let greatest = 0;
let A;
let B;
let solution = 0;
for (let a = -999; a < 1000; a++) {
  //   console.log("Checking on Number: " + a);
  for (let b = -1000; b <= 1000; b++) {
    let x = 0;
    let counter = 0;

    while (isPrime(solve(a, b, x))) {
      counter++;
      x++;

      if (counter > greatest) {
        greatest = counter;
        A = a;
        B = b;
        solution = a * b;
      }
    }
  }
}

console.log(A);
console.log(B);
console.log(greatest);
console.log("Solution is: " + solution);

function solve(a, b, n) {
  let result = Math.pow(n, 2) + a * n + b;

  return result;
}
function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else if (n < 0) {
    n*= -1;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}


// The fraction 49/98 is a curious fraction,
// as an inexperienced mathematician in attempting to simplify
// it may incorrectly believe that 49/98 = 4/8, which is correct,
// is obtained by cancelling the 9s.

// We shall consider9 fractions like, 30/50 = 3/5, to be trivial examples.

// There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

// If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

const fractionFinder = (num) => {
  if (num % 10 === 0) {
    return [];
  }

  let first = parseInt(num.toString().charAt(0));
  let second = parseInt(num.toString().charAt(1));
  let results = [];
  for (let i = 1; i < 10; i++) {
    let denom = parseInt(first.toString() + i.toString());
    // console.log(denom);

    let fraction = num / denom;
    let compare = second / i;
    // console.log(num, " ", denom);
    // console.log(second, " ", i);

    if (fraction === compare && num !== denom && fraction < 1) {
      results.push([num, denom]);
    }

    denom = parseInt(i.toString() + second.toString());

    fraction = num / denom;
    compare = first / i;
    // console.log(num, " ", denom);
    // console.log(first, " ", i);

    if (fraction === compare && num !== denom && fraction < 1) {
      results.push([num, denom]);
    }

    denom = parseInt(i.toString() + first.toString());

    fraction = num / denom;
    compare = second / i;
    // console.log(num, " ", denom);
    // console.log(first, " ", i);

    if (fraction === compare && num !== denom && fraction < 1) {
      results.push([num, denom]);
    }
    denom = parseInt(second.toString() + i.toString());

    fraction = num / denom;
    compare = first / i;
    // console.log(num, " ", denom);
    // console.log(first, " ", i);

    if (fraction === compare && num !== denom && fraction < 1) {
      results.push([num, denom]);
    }
  }
  return results;
};

// console.log(fractionFinder(49));
let allFractions = [];
for (let i = 12; i < 100; i++) {
  allFractions = [...allFractions, ...fractionFinder(i)];
}

// console.log(allFractions);
let product = 1;

allFractions.forEach((element, index) => {
  allFractions[index] = element[0] / element[1];
  product *= allFractions[index];
//   console.log(product);
});

// console.log(allFractions);
// console.log(product);


function gcd(a, b) {
	return (b) ? gcd(b, a % b) : a;
}

var decimalToFraction = function (_decimal) {
	var top		= _decimal.toString().replace(/\d+[.]/, '');
	var bottom	= Math.pow(10, top.length);
	if (_decimal > 1) {
		top	= +top + Math.floor(_decimal) * bottom;
	}
	var x = gcd(top, bottom);
	return {
		top		: (top / x),
		bottom	: (bottom / x),
		display	: (top / x) + ':' + (bottom / x)
	};
};

console.log(decimalToFraction(product.toFixed(5)).bottom);

// console.log(process.memoryUsage());
console.log("RSS ", process.memoryUsage().rss / (1024 * 1024) , " MB");
console.log("HEAP TOTAL ", process.memoryUsage().heapTotal / (1024 * 1024), " MB");
console.log("HEAP USED ", process.memoryUsage().heapUsed / (1024 * 1024), " MB");
console.log("EXTERNAL ", process.memoryUsage().external / (1024 * 1024), " MB");
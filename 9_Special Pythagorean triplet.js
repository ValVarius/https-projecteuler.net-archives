// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 3n2 + 4n2 = 9 + 16 = 25 = 5n2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.
let product;
let a;
let c;

for (let b = 1; b < 1000; b += 1) {
    a = (500000 - 1000 * b) / (1000 - b);

    if (Math.floor(a) === a) {
        c = 1000 - a - b;

        console.log(a, b, c);
        product = a* b* c;

        break;
    }
}

console.log(product);

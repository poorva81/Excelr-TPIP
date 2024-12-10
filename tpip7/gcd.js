const prompt =require("prompt-sync")()
const a =parseInt(prompt("enter no 1 :- "))
const b =parseInt(prompt("enter no 2 :- "))

function gcd(a, b) {
    // if b is 0, the GCD is a
    if (b === 0) return a;
    // Recursion gcd(b, a % b)
    return gcd(b, a % b);
}

console.log(`The GCD of ${a} and ${b} is:`, gcd(a, b));
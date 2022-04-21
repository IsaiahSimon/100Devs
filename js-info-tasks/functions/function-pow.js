// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// P.S. In this task the function should support only natural values of n: integers up from 1.

function pow(x,n){
  return (Math.round(x)) ** (Math.round(n));
}

console.log(pow(3, 2) === 9);
console.log(pow(3, 3) === 27);
console.log(pow(1, 100) === 1);

console.log(pow(3.3, 2) === 9);
console.log(pow(3, 2.9) === 27);
console.log(pow(1, 100.4) === 1);
// Let's pretend the JavaScript Math.min() function doesn't exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

// TODO: write the min() function
function min(a, b){
  if(a > b){
    return b;
  }else{
    return a;
  };
}

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1
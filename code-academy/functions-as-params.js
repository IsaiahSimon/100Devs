// Working with Higher Order functions

// work to be checked
const addTwo = num => {
  return num + 2;
}

// Higher-order function will check argument function
const checkConsistentOutput = (func, val) => {

  // this is the check (5 + 2 = 7)
  const checkA = val + 2;

  // this is the call of addTwo(5)
  const checkB = func(val);

  // conditionals
  if (checkA === checkB){
    return checkB;
  }else{
    return 'inconsistent results'
  };
}

// test that it all works
console.log(checkConsistentOutput(addTwo, 5));


// What happens if you change the value of 2 in checkA?
// 'inconsistent results' is returned instead, and outputted to the console.

// Which variable holds the callback function?
// checkB holds the callback function

// What happens if you invoke the function’s argument?
// a "TypeError: func is not a function" occurs at "const checkB = func(val);"
// To start, declare a new variable named newSum using the const keyword. Assign to newSum the value of calling .reduce() on newNumbers. You don’t need to provide any arguments to .reduce() yet.

const newNumbers = [1, 3, 5, 7];

// Provide .reduce with an argument of a callback function. The callback function has two parameters. The first parameter is accumulator and the second parameter is currentValue. Use either a function expression or an arrow function.

  // Using an Inline callback function (anonymous)
  const newSum = newNumbers.reduce(function (accumulator, currentValue){
    return accumulator + currentValue;
  }
  )

  // Using an Arrow function
  const newSum = newNumbers.reduce(
    (accumulator, currentValue) => {
    return accumulator + currentValue;
    }
  )

  // Using a Callback function
  const newNumbers = [1, 3, 5, 7];

  const callbackFn = function (accumulator, currentValue){
    return accumulator + currentValue;
  }

  newNumbers.reduce(callbackFn)


// To check the value being used as we iterate through the array, add three console.log statements to the function body of the callback:
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
})

console.log(newSum);

// Add a second argument of 10 to .reduce().
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10)

console.log(newSum);


/********** Reduce Syntax for reference **********/

// Arrow function
reduce((previousValue, currentValue) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function(previousValue, currentValue) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)

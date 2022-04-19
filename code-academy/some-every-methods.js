const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below
// There is something missing in the words.some() method call. Fix this method so that true is printed to the console.
console.log(words.some((word) => {          // arrow function parameter was missing
  return word.length < 6;
}));

// Use filter to create a new array
// Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.
const interestingWords = words.filter((word) => {
  return word.length > 5;
})

console.log(interestingWords);


// Make sure to uncomment the code below and fix the incorrect code before running it
// Complete the code between the parentheses to check if every element has more than 5 characters.
console.log(interestingWords.every((word) => {
  return word.length > 5;                    // added comparison
} ));

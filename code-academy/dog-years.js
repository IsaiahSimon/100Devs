// Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

// Here’s how you convert your age from “human years” to “dog years”:

// The first two years of a dog’s life count as 10.5 dog years each.
// Each year following equates to 4 dog years.
// Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.

//age to convert from
const myAge = 31;

//calculate the first 2 years.
let earlyYears = 2;

earlyYears = earlyYears * 10.5;

//calculate the remaining years
laterYears = myAge - 2;

//the number of dog years accounted for by your later years.
laterYears *= 4;

//check work
//console.log(earlyYears);
//console.log(laterYears);

//calculate myAge in dog years
myAgeInDogYears = earlyYears + laterYears;

//converts myName to lowercase letters
myName = `Isaiah`.toLowerCase();

//Final output
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
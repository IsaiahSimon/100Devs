// Check the following program that shows even numbers (divisible by 2) between 1 and 10.
// Improve the program so that it also shows odd numbers.
// Improve it again to replace the initial number 1 by a number given by the user.


/*
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }else{
    console.log(`${i} is odd`);
  }
}
*/

let startNum = Number(prompt('Enter a starting number between 1 and 10:'));

for (let i = startNum; i <= 10 + (startNum -1); i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }else{
    console.log(`${i} is odd`);
  }
}

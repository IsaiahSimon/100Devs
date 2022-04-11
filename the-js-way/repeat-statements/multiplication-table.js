// Write a program that asks the user for a number, then shows the multiplication table for this number.
let userNum = Number(prompt('Enter a number to get its multiplication table:'));

for(let i = 1; i <= 12; i++){
  console.log(`${i} x ${userNum} = ${i*userNum}`)
}

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
let userNum = Number(prompt('Enter a number between 2 and 9 to get its multiplication table: :'))

while((userNum < 2) || (userNum > 9)){
  userNum = Number(prompt('Please enter a number between 2 and 9!'));
}

for(let i = 1; i <= 12; i++){
  console.log(`${userNum} x ${userNum} = ${i*userNum}`)
}

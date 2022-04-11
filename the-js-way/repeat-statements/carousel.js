// Write a program that launches a carousel for 10 turns, showing the turn number each time.

// When it's done, improve it so that the number of turns is given by the user.

let numOfTurns = Number(prompt('How many turns would you like the Carousel to spin?:'));
let i = 1;

while(i <= numOfTurns){
  console.log(`The current turn number is: ${i}`);
  i++;
}
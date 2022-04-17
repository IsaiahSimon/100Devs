// You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

// In this project we will build a Magic Eight Ball using control flow in JavaScript.

// The user will be able to input a question, then our program will output a random fortune.

let userName = 'Isaiah';

//greet user
userName ? console.log(`Hello ${userName}!`) : console.log(`Hello!`);

//state user's question
let userQuestion = '"Will it rain today?"'
console.log(`Okay ${userName}, your question was: ${userQuestion}`);

//generate a random number between 0 anf 7
let randomNumber = Math.floor(Math.random() * 8);


let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  default:
    eightBall = 'Signs point to yes';
    break;
}

console.log(`Hmmm...let's see....`);
console.log(`${eightBall}`);
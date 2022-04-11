// Write a program that plays "neither yes, nor no" with the user.
//Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

let userText = prompt('Type some text:').toLowerCase();

while(!(userText === 'no')||!(userText === 'yes')) {
  userText = prompt('Type some text:').toLowerCase()
}

let num = Number(prompt('num:'))

while( (num<5)||(num > 10)){
  num = Number(prompt('num:'));
}``
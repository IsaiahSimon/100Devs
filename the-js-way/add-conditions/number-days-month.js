//Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month.
//Leap years are excluded. Incorrect inputs must be taken into account.

let monthNumber = Number(prompt('Please enter a month number (1-12):'));
arrOfMonths30 = [4,6,9,11]
arrOfMonths31 = [1,3,5,7,8,10,12]

if(monthNumber === 2){
  console.log('Feburary has 28 days!');
}else if(arrOfMonths30.includes(monthNumber)){
  console.log('Your month has 30 days!');
}else if(arrOfMonths31.includes(monthNumber)){
  console.log('Your month has 31 days!');
}else{
  console.log('That\'s not a valid month number!');
}
//Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

let num1 = Number(prompt('Please enter a number:'));
let num2 = Number(prompt('Please enter another number:'));

if (num1 > num2){
  alert(`${num1} is greater than ${num2}!`)
}else if (num1 < num2){
  alert(`${num1} is less than ${num2}!`)
}else{
  alert(`${num1} is equal to ${num2}!`)
}
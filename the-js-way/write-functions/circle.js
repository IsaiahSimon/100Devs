// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

// Here are some tips for solving this exercise:
  // Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
  // The value of number π (Pi) is obtained with Math.PI in JavaScript.
  // You might want to use the exponentiation operator ** to perform computations.

function calcCircumference(radius){
  return (2) * (Math.PI) * (radius);
}

console.log(calcCircumference(3)); // 18.84956
console.log(calcCircumference(9)); // 56.54867
console.log(calcCircumference(15)); // 94.24778


function calcAreaOfCircle(radius){
  return (Math.PI) * (radius ** 2);
}

console.log(calcAreaOfCircle(3)); // 28.27433
console.log(calcAreaOfCircle(7)); // 153.93804
console.log(calcAreaOfCircle(13)); // 530.92916
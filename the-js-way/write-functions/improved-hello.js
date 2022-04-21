// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

// TODO: ask user for first and last name
const userFirstName = prompt('What is your first name?: ');
// John

const userLastName = prompt('What is your last name?: ');
// Doe

// TODO: call sayHello() and show its result
console.log(sayHello(userFirstName, userLastName));
// Hello, John Doe!
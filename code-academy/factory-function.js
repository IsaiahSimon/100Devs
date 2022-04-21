// Instead of making individual robots like we’ve been doing, let’s make a factory function to make robots as we please!

// Create a factory function named robotFactory that has two parameters model and mobile. Make the function return an object. In the object, add a key of model with the value of the model parameter. Add another property that has a key of mobile with a value of the mobile parameter.

// Then add a method named beep without a parameter that will log 'Beep Boop' to the console.

const robotFactory = function(model, mobile){
  return {
    model: model,
    mobile: mobile,
    beep(){
      console.log('Beep Boop');
    }
  }
}

// Use your factory function by declaring a const variable named tinCan. Assign to tinCan the value of calling robotFactory with the first argument of 'P-500' and the second argument of true.
const tinCan = robotFactory('P-500', true);

// Let’s now check what tinCan can do! Call .beep() on tinCan.
// You should see 'Beep Boop' printed to the console which means the factory function produced a robot object!
tinCan.beep();
// Beep Boop

/**********REFACTOR: Using ES6 Property Value Shorthand*****************/
function robotFactory(model, mobile){
  return {
    model,        // No need to repeat model: model,
    mobile,       // No need to repeat mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)


/**********Destructured Assignment*****************/

// Example 1:
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const {functionality} = robot;    // ES6 syntax
functionality.beep();             // Since functionality is referencing robot.functionality we can call the methods available to robot.functionality simply through functionality.

// Example 2:
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

// Regular way
const residence = vampire.residence;
console.log(residence); // Prints 'Transylvania'

// Destructured Assignment
const { residence } = vampire;
console.log(residence); // Prints 'Transylvania'

// Nested access using Destructured Assignment
const { day } = vampire.preferences;
console.log(day); // Prints 'stay inside'
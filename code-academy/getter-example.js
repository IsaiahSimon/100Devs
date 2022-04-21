const robot = {
  _model: '1E78V2',
  _energyLevel: 100,

  // In robot, create a getter method named energyLevel using the get keyword. Leave function body blank for now.
  get energyLevel() {
    // Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator.
    if(typeof(this._energyLevel) === 'number') {
      // If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel.
      return `My current energy level is ${this._energyLevel}`;

     // Add an else statement that returns 'System malfunction: cannot retrieve energy level'.
    }else{
      return 'System malfunction: cannot retrieve energy level';
    };
  }
};

// Log the result of calling the getter method energyLevel on robot to the console.
// Notice that the method will return a formatted response rather than just accessing a property!
console.log(robot.energyLevel);
// My current energy level is 100

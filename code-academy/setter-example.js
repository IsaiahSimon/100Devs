// Currently, in robot there is a getter method for numOfSensors but no setter method! What if we need to add or remove some sensors? Let’s fix that problem.

// Add a setter method named numOfSensors using the set keyword. Provide a parameter of num. Leave the function body empty for now.

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    // Add a check to see if num is a number using the typeof operator.
    // num should also be greater than or equal to 0.
    if((typeof(num) === 'number') && (num >= 0)){
      // If both conditions are met, reassign this._numOfSensors to num.
      this._numOfSensors = num;

     // Now add an else that logs 'Pass in a number that is greater than or equal to 0' to the console.
    }else{
      console.log('Pass in a number that is greater than or equal to 0');
    };
  }
};

// Use the numOfSensors setter method on robot to assign _numOfSensors to 100.
robot.numOfSensors = 100;

// To check that the setter method worked, console.log() robot.numOfSensors.
console.log(robot.numOfSensors);
// 100

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below

// reassign long function to shorter variable name, note no (), we want the function, not it's value!
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

// invoke
isTwoPlusTwo();

// get the name of the original function
console.log(isTwoPlusTwo.name);
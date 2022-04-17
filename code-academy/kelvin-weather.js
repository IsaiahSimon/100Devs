//Today's forecast
const kelvin = 273;

//Today's forecast, converted to Celcius
const celcius = kelvin - 273;

//Convert Celcius to Fahrenheit
let fahrenheit = celcius * (9/5) + 32;

//Rounds down decimals
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
//The temperature is 68 degrees Fahrenheit.


// By using variables, your program should work for any Kelvin temperature — just change the value of kelvin and run the program again.

// What’s 0 Kelvin in Fahrenheit?
//The temperature is -460 degrees Fahrenheit.


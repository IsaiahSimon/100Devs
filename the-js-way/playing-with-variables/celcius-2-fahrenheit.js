// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
// The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.

let celciusTempFromUser = Number(prompt('Please enter a temperature in Celcius degrees:'));

convertedTemp = (celciusTempFromUser * (9/5)) + 32;

alert(`${celciusTempFromUser} degrees is ${convertedTemp} degres in Fahrenheit!`)
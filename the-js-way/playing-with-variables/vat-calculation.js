//Write a program that asks the user for a raw price.
//After that, it calculates the corresponding final price using a VAT rate of 20.6%.

const VAT = 0.206

let rawPrice = Number(prompt('Pleas enter a raw price:'));

let fullPrice = (rawPrice + (rawPrice * VAT)).toFixed(2);

alert(`The full price will be $${fullPrice}`);
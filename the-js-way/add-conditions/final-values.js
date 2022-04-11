// Take a look at the following program.
// Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values.
// Check your predictions by executing the program.

let nb1 = Number(prompt("Enter nb1:")); //2
let nb2 = Number(prompt("Enter nb2:")); //4
let nb3 = Number(prompt("Enter nb3:")); //5

if (nb1 > nb2) {
  nb1 = nb3 * 2; 
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);
// 0 4 14

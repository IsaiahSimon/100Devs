//Observe the following program and try to predict the final values of its variables.
//Check your prediction by executing it.

let a = 2;
//2

a -= 1;
//1

a++;
//2

let b = 8;
//8

b += 2;
//10

const c = a + b * b;
//2 + (10 * 10) = 102

const d = a * b + b;
//(2 * 10) + 10 = 30

const e = a * (b + b);
// 2 * (10 + 10) = 40

const f = a * b / a;
// (2 * 10) / 2 = 10

const g = b / a * a;
// 10 / 2 * 2 =  10
console.log(a, b, c, d, e, f, g);
// 2 10 102 30 40 10 10
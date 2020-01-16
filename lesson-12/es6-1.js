import { GREETING, sum as sum2 } from './es6-2.js';

console.log(GREETING);
console.log(sum2(3, 4));

const NEW_CONST = 256;

let x = sum2(NEW_CONST, 45);

x += 1;

x += 10;
console.log('x', x + x);
console.log('hot');

// import * as test from "./es6-2.js";
//
// console.log(test.GREETING);
// console.log(test.sum(3, 4));
import BMW from './cars';

console.log('Hello webpack22');
const x = (t) => t;
console.log(x(23));
const bmw = new BMW('318');
const arr = [1, 2, 4, 5];

arr.forEach((item, index) => {
  let multiply = index * Math.random() * 10;
  multiply += 10;
  console.log(item * multiply);
});

const sum = (a, b) => a + b;

console.log(sum(23, 56));

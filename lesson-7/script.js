// [
//     {
//       id: 'email',
//       help: 'Email help note',
//     },
//     {
//       id: 'name',
//       help: 'Name help note',
//     },
//     {
//       id: 'age',
//       help: 'Age help note',
//     },
//   ];
//
// function initCart() {
//   if (localStorage.getItem('data')) {
//     return JSON.parse(localStorage.getItem('data'));
//   }
//
//   return [];
// }
//
// const cart = initCart();
//
// function saveInLocal(data) {
//   localStorage.setItem('data', JSON.stringify(data));
//   return true;
// }
//
// function addItem() {
//   // add items logic
//   saveInLocal(cart);
// }
//
// addItem();
//
// //
//
// function counter() {
//   let count = 0;
//
//   return function () {
//     return count++;
//   };
// }
//
// const counterInstance = counter();
// console.log(counterInstance());
// console.log(counterInstance());
// console.log(counterInstance());
// console.log(counterInstance());

// function makeSize(size = 12) {
//   return function () {
//     document.body.style.fontSize = `${size}px`;
//   };
// }
//
// const size14 = makeSize(14);
// const size16 = makeSize(16);
// const size18 = makeSize(18);
//
// document.getElementById('size-14').onclick = size14;
// document.getElementById('size-16').onclick = size16;
// document.getElementById('size-18').onclick = size18;

// const Counter = ((function () {
//   let privateCounter = 0;
//
//   function changeBy(val) {
//     privateCounter += val;
//     return privateCounter;
//   }
//   return {
//     increment() {
//       return changeBy(1);
//     },
//     decrement: () => changeBy(-1),
//     changeValue: (val) => changeBy(val),
//     value: () => privateCounter,
//   };
// })());
// console.log(Counter.value());

// function showHelp(help) {
//   document.getElementById('help').innerText = help;
// }
//
// function setHelp() {
//   const helpText = [
//     {
//       id: 'email',
//       help: 'Email help note',
//     },
//     {
//       id: 'name',
//       help: 'Name help note',
//     },
//     {
//       id: 'age',
//       help: 'Age help note',
//     },
//   ];
//
//   for (var i = 0; i < helpText.length; i++) {
//     var item = helpText[i];
//     document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
//   }
// }
//
// function makeHelpCallback(help) {
//   return function() {
//     showHelp(help);
//   };
// }
//
// setHelp();


// const obj = {
//   name: 'Name',
//   secondName: 'Second',
//   getFullName() {
//     return `${this.name} ${this.secondName}`;
//   },
// };
//
// function testApply(name1, name2) {
//   'use strict';
//   return this[name1] + ' ' + this[name2];
// }
//
// const objApply = { a: 'Hello', b: 'Word' };
//
// console.log(testApply.apply(objApply, ['a', 'b']));

// function add(a, b, c) {
//   return a + b + c;
// }
//
// function mult(a, b) {
//   return a * b;
// }
//
// function limiter(fn, limit = 1) {
//   let counter = 0;
//   return function (...args) {
//     if (counter !== limit) {
//       counter += 1;
//       return fn.apply({}, args);
//     }
//     return 'You have done max count of running';
//   };
// }
//
// const addRunner = limiter(add, 4);
// console.log(addRunner(1, 2, 3));
// console.log(addRunner(12, 2, 4));
// console.log(addRunner(13, 2, 5));
// console.log(addRunner(15, 2, 6));
// console.log(addRunner(1, 2));
// console.log(addRunner(1, 2));
// console.log(addRunner(1, 2));
//
// const multRunner = limiter(mult, 2);
//
// console.log(multRunner(3, 3));
// console.log(multRunner(3, 3));
// console.log(multRunner(3, 3));
// console.log(multRunner(3, 3));
// console.log(multRunner(3, 3));
// console.log(multRunner(3, 3));

// const obj = {
//   count: 10,
//   getCount() {
//     return this.count;
//   },
// };
//
// const copyGetCount = obj.getCount.bind({count: 20});
//
// console.log(copyGetCount());

// function mult(a, b, c, d) {
//   return a * b * c * d;
// }
//
// const mult234 = mult.bind(null, 2, 3, 4);
// const mult4 = mult.bind(null, 4);
//
// console.log(mult234(1));
// console.log(mult4(10, 10, 10));
// const lateBlomer = {
//   petalCount: (Math.ceil(Math.random() * 12)) + 1,
//   declare(heigth) {
//     console.log(`Я цветок с ${this.petalCount}
//      лепестками! Моя высота ${heigth}`);
//   },
//   bloom() {
//     setTimeout(this.declare.bind(this, 100), 3000);
//   },
// };
//
// lateBlomer.bloom();

const testObj = {
  a: 'rule 1',
  b: 'rule 2',
  getRule: (item) => this[item],
};

console.log(testObj.getRule('a'));

const testFn = testObj.getRule.bind(testObj);
// testFn('a');
// testFn('b');
console.log(testFn('b'));

function test2() {
  return testFn('a');
}



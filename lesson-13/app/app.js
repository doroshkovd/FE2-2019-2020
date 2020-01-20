import { test1, test2 } from "./args";
import { Task } from "./task";
import { BMW } from './car';

// test2(1, 2, 3);
// test2(1, 2, 3, 4, 5);

// const arr = [...'abcdfeg'];
// console.log(arr);
//
// const arr2 = [1, 2, 3, 4, 5];
//
// let [, , y, z, x, x2 = 61] = arr2;
//
// console.log(y, z, x, x2);
//
// const obj = {
//   title: 1,
//   width: 2,
//   height: 3,
// };
//
// let { title, width: w, height } = obj;
//
// console.log(title, w, height = 200);
//
// const task1 = new Task('name', 1);
// console.log(Task.getCount());
// const task11 = new Task('name', 1);
// const task2 = new Task('name', 1);
// const task3 = new Task('name', 1);
// const task4 = new Task('name', 1);
// const task5 = new Task('name', 1);
// const task6 = new Task('name', 1);
// console.log(Task.getCount());

// const bmw = new BMW('E38', 'Black');
// console.log(bmw);

// const smb = Symbol('test');
// const smb2 = Symbol('test');
// console.log(smb === smb2);
// const obj = {
//   a: 1,
//   b: 2,
//   [smb]: 3,
// };
//
// console.log(obj);
// for (let key in obj) {
//   console.log(key);
// }

//
// const table = {
//   apple: 1,
//   tomate: 2,
//   oil: 3,
// };
//
// table[Symbol.iterator] = () => {
//   let keys = Object.keys(table).sort();
//   let index = 0;
//
//   return {
//     next: () => {
//       return {value: keys[index], done: index++ >= keys.length }
//     }
//   }
// };
//
// const iter = table[Symbol.iterator]();
// console.log(...table);
// for (let key of table) {
//   console.log(key);
// }

// function* f(value) {
//   for (let item of value) {
//     yield item;
//   }
// }
//
// const iterator = f([2, 3, 5]);
// console.log(iterator.next().value);








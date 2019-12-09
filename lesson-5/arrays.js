// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1];
// const arr4 = arr1.slice(0);
//
// const arr5 = [...arr1, ...arr2];
//
// const arr6 = arr5.concat(arr2);

// const arr = [1, 3, 4, 5, 6];
//
// arr.splice(-3, 2, 44, 55);
//
// console.log(arr);

const arr = [5, 6, 2, 67, 0, 56];

// console.log(arr.slice(0, 3));
//
// console.log(arr);
//
//
// arr.slice(0)

// console.log(arr.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//
//   if (a < b) {
//     return -1;
//   }
//
//   return 1;
// }));

// console.log(arr.sort((a, b) => {
//   return b - a;
// }));

// equal

console.log(arr.sort((a, b) => b - a));

function concatArr(arr1, arr2) {
  arr1 = arr1.filter((item) => !arr2.includes(item));

  return [...arr1, ...arr2];
}

const arrMult = [1, 2, 3, 4, 5];
// const arrResult = arrMult.map((item) => item * 10);
const arrResult = arrMult.forEach((item, index) => {
  arrMult[index] = 45;
});

console.log(arrResult);
console.log(arrMult);

const sumArr = [100, 100, 150];

function arrSum(source) {
  return source.reduce((acc, item) => {
    return acc + item;
  }, 0);
}

console.log(arrSum(sumArr));

function removeDuplicates(source) {
  return source.filter((item, index) => index === source.lastIndexOf(item));
}

console.log(removeDuplicates([1, 1, 1, 2, 4, 5, 6, 5]));

// const obj = {
//   _x: 10,
//   set x(value) {
//     this._x = value > 20 ? 20 : value;
//   },
//   get x() {
//     return `X is equal ${this._x}`;
//   },
// };
//
// obj.x = 21;
// console.log(obj.x);

const obj = {
  a: 1,
  b: 2,
  c: 3,
};
// try {
//   [].forEach((item) => {
//     console.log(item);
//   });
// } catch (error) {
//   console.log(error);
//   console.log('Catch block');
// } finally {
//   alert('finally');
// }


function MyError(message = 'Default error message', data) {
  this.name = 'My Error';
  this.data = data;
  this.message = message;
  this.stack = (new Error()).stack;
}


MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

function test(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw new MyError('Arr is not array');
    }
    arr.forEach((item) => console.log(item));
  } catch (e) {
    console.log(e.message);
    console.log(e.stack);
    console.log(e.data);
  }
}
test(111);
test([1]);


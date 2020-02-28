const pr = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Dima');
  }, 1000);
});

pr().then((val) => {
  return `My name is ${val}`
})
  .then((val2) => {
    console.log(val2);
  })
  .catch((err) => {
    console.log(`Err: ${err}`);
  });

async function myName() {
  try {
    const val = await pr();
    const val2 = `My name is ${val} from async/await`;
    console.log(val2);
    return val2;
  } catch (e) {
    console.log(e + 'myName error');
  }
}
//
myName();
//
// async function useMyName() {
//   const val3 = await myName();
//   console.log(val3 + 'from useMyName');
// }
//
// useMyName();


// class Waiter {​
//   async wait() {​
//     return await Promise.resolve(1);​
//   }​
// }​
// ​
// new Waiter()​
// .wait()​
// .then(alert); // 1​

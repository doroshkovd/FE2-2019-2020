// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Done');
//     }, 5000)
// });
//
// pr.then((val) => {
//   console.log(val);
// });


function Timer(elem, current, done) {
  this.elem = elem;
  this.current = current;
  this.done = done;
  this.timerId;

  this.start = () => {
    this.timerId = setInterval(() => {
      this.current -= 1;
      this.elem.innerHTML = this.current;
      if (this.current === 0) {
        this.pause();
        this.done ? this.done() : null;
      }
    }, 1000);
  };
  this.startPromise = () => {
    return new Promise((resolve, reject) => {
      this.timerId = setInterval(() => {
        this.current -= 1;
        this.elem.innerHTML = this.current;
        if (this.current === 0) {
          this.pause();
          resolve('Timer was completed' + current);
        }
        if (this.current < 0) {
          reject('Eroor');
        }
      }, 1000);
    });
  };
  this.pause = () => {
    clearTimeout(this.timerId);
  };

  this.reset = (elem, current, done) => {
    this.elem = elem;
    this.current = current;
    this.done = done;
  }
}

const timer1 = new Timer(document.createElement('div'), 3);
const timer2 = new Timer(document.createElement('div'), 6);
const timer3 = new Timer(document.createElement('div'), 9);
// timer1.start();

Promise.all([timer1.startPromise(), timer2.startPromise(), timer3.startPromise()])
  .then(([value1, value2, value3 ]) => {
    console.log(value1);
    console.log(value2);
    console.log(value3);
  });

Promise.resolve(5).then((val) => {})
Promise.reject('Error').then((val) => {})


// timer1.startPromise()
// .then((res) => {
//   console.log(res);
//   return `New result ${res}`;
// })
//   .then((newRes) => {
//     console.log(newRes);
//     throw new Error('error')
//   })
//   .catch((error) => {
//     console.log(error);
//   });
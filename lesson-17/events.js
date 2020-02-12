function Timer(limit) {
  let intervalId = null;
  let value = limit;
  let isPaused = false;

  this.start = function () {
    return new Promise((resolve, reject) => {
      if (isPaused) {
        isPaused = false;
      }
      intervalId = setInterval(() => {
        if (value === 0) {
          clearInterval(intervalId);
          resolve('Timer was completed')
        };
        if (value < 0) {
          clearInterval(intervalId)
          reject('Error');
        }
        limit.value = value;
        value -= 1;
      }, 1000);
    });
  };

  this.pause = function () {
    if (!isPaused) {
      clearInterval(intervalId);
      isPaused = true;
    }
  };
}

const timer = new Timer(3);

let startTimer = timer.start();

startTimer.then((res) => {
  console.log(res);
});

timer.pause();

startTimer = timer.start();
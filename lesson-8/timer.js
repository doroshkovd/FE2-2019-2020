function Timer(renderEl, limit = 30) {
  let value = limit;
  let isPause = false;
  let intervalId = null;
  const el = renderEl;

  this.start = function () {
    intervalId = setInterval(() => {
      if (value === 0) {
        clearInterval(intervalId);
      }
      el.innerHTML = value;
      value -= 1;
    }, 1000);
  };

  this.pause = function () {
    if (!isPause) {
      clearInterval(intervalId);
      isPause = true;
      return true;
    }
    this.start();
    isPause = false;
    return true;
  };
}

const timerUIElement = document.getElementById('timer');
const timer2El = document.getElementById('timer2');
const timerBtn = document.getElementById('pause');
// const timer = new Timer(timerUIElement);
// timer.start();
//
// const timer2 = new Timer(timer2El, 15);
// timer2.start();
//
// timerBtn.addEventListener('click', () => {
//   timer.pause();
// });


for (let i = 1; i <= 100; i++) {
  const timer = new Timer(timerUIElement, i * 10);
  timer.start();
}

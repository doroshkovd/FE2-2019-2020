function EventObserver() {
  this.observers = [];

  this.subscribe = (fn) => {
    this.observers.push(fn);
  };

  this.broadcast = (data) => {
    this.observers.forEach((item) => {
      item(data);
    });
  };
}

const eventObs = new EventObserver();

function test1(timer) {
  setTimeout(() => {
    console.log('async start');
    console.log('async progress');
    console.log('async end');
    eventObs.broadcast('Timer end');
  }, timer);
}

function test2(data) {
  console.log(`Data from test 2: ${data}`);
}

function test3(data) {
  console.log(`Data from test 3: ${data}`);
}

function test4(data) {
  console.log(`Data from test 4: ${data}`);
}

eventObs.subscribe(test2);
eventObs.subscribe(test3);
eventObs.subscribe(test4);
test1(2000);


// Как посмотреть что функция
// const fn = () => true;
// console.log(typeof fn);

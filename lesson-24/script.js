
const pr = Promise.resolve('promise');

pr.then((val) => console.log(val));
console.log('Sync');
const el = document.createElement('test');


// Let's get hold of those elements
var outer = document.querySelector('.outer');
var inner = document.querySelector('.inner');

// Let's listen for attribute changes on the
// outer element
const newObserver = new MutationObserver(function(param1, param2) {
  console.log('mutate');
  console.log(param1);
  console.log(param2);
});

newObserver.observe(outer, {
  attributes: true
});

// Here's a click listener…
// function onClick() {
//   console.log('click');
//
//   setTimeout(function() {
//     console.log('timeout');
//   }, 0);
//
//   Promise.resolve().then(function() {
//     console.log('promise');
//   });
setInterval(() => {
  outer.setAttribute('data-random', Math.random());
}, 2000);


// // …which we'll attach to both elements
// inner.addEventListener('click', onClick);
// outer.addEventListener('click', onClick);

// console.dir(document);
//
// let a = 1;
// let b = 2;
//
// [a, b] = [b, a];
//
// console.log('a', a, 'b', b)
// document.documentElement;
// document.body;
// console.log(document.forms);
//
const input = document.forms[0].elements[0];
//
// console.dir(input.parentElement);
// console.dir(input.parentElement.previousElementSibling);
// console.dir(input.parentElement.nextElementSibling.firstElementChild);
// console.dir(input.parentElement.parentElement.children);
// console.time('query-selector');
// const elem1 = document.querySelector('#help');
// console.timeEnd('query-selector');
//
// console.time('get-by-id');
// const elem2 = document.getElementById('help');
// console.timeEnd('get-by-id');

// console.time('query-selector');
// const elem1 = document.querySelector('p');
// elem1.querySelectorAll('img');
// console.timeEnd('query-selector');
//
// console.dir(document.images);
//
// console.time('get-by-tag');
// const elem2 = document.getElementsByTagName('p');
// console.timeEnd('get-by-tag');

// console.dir(document.forms[0]);

//
// console.log(input.hasAttribute('id'));
// console.log(input.hasAttribute('class'));
// console.log(input.setAttribute('class', 'test1 test2 test3'));
// console.log(input.hasAttribute('class'));
// console.log(input.getAttribute('class'));
// console.log(input.removeAttribute('class'));

// console.dir(input.dataset.index)
//
// const inElement = document.createElement('div');
// const inElement2 = document.createElement('div');
// inElement.style.cssText = 'width: 200px;height: 200px;position: relative;background: red;';
// inElement2.style.cssText = 'width: 200px;height: 200px;position: relative;background: blue;';
//
//
// input.parentElement.parentElement.append(inElement);
// input.parentElement.parentElement.prepend(inElement2);
// inElement.replaceWith(inElement2);
// const htmlText = '<p><a href="script.js"> Првет мир!!!</a></p>';
// document.body.insertAdjacentHTML('beforeend', htmlText);
// document.body.insertAdjacentHTML('afterend', htmlText);
// document.body.innerHTML = htmlText;
// document.addEventListener('mouseup', () => {
//   console.log('mouseup');
// });
//
// document.addEventListener('mousedown', () => {
//   console.log('mousedown');
// });
//
// document.addEventListener('click', () => {
//   console.log('click');
// });
//
// document.addEventListener('mousemove', () => {
//   console.log('mousemove');
// });

input.focus();

let eventHandler = (event) => {
  console.log('hashchange');
  console.log(event);
};

window.addEventListener('hashchange', eventHandler);

window.removeEventListener('hashchange', eventHandler);
const age = document.getElementById('age');
// age.addEventListener('click', function(event){
//   // event.stopPropagation();
//   event.stopImmediatePropagation();
//   console.log(event);
//   console.log(this);
//   alert(1);
// }, true);

age.addEventListener('click', function(event){
  console.log('second handler p');
});

document.querySelector('button').addEventListener('click', function(event){
  console.log(event);
  console.log(this);
});

document.querySelector('form').addEventListener('click', function(event){
  console.log(event);
  console.log(this);
});

const event = new Event('click');

setTimeout(() => {
  document.querySelector('button').dispatchEvent(event);
}, 2000)



const vasia = document.getElementById('name');
const vasia2 = document.getElementById('name2');
const nameVal = document.getElementById('name-val');

const customEvent = new CustomEvent('data', {detail: { value: nameVal}});

// nameVal.addEventListener('input', (event) => {
//   console.log(event);
//   // vasia.dispatchEvent(customEvent);
//   // vasia2.dispatchEvent(customEvent);
// });
//
// document.addEventListener('keypress', (event) => {
//   event.preventDefault()
//   console.log(event);
//   // vasia.dispatchEvent(customEvent);
//   // vasia2.dispatchEvent(customEvent);
// });
//
// document.addEventListener('keydown', (event) => {
//   event.preventDefault()
//   console.log(event);
//   // vasia.dispatchEvent(customEvent);
//   // vasia2.dispatchEvent(customEvent);
// });
//
// document.addEventListener('keyup', (event) => {
//   event.preventDefault()
//   console.log(event);
//   // vasia.dispatchEvent(customEvent);
//   // vasia2.dispatchEvent(customEvent);
// });
//
// vasia.addEventListener('data', (event) => {
//   console.log(event.detail.value.value);
//   event.target.innerHTML = event.detail.value.value;
// });
//
// vasia2.addEventListener('data', (event) => {
//   console.log(event.detail.value.value);
//   event.target.innerHTML = event.detail.value.value;
// });


// document.addEventListener('click', (event) => {
//   console.log(event);
// });
// let current;
// document.addEventListener('contextmenu', (event) => {
//   if (current) {
//     current.remove();
//   }
//   console.log(event);
//   event.preventDefault();
//   const div = document.createElement('div');
//   div.style.background = 'red';
//   div.style.width = '100px';
//   div.style.height = '100px';
//   div.style.position = 'fixed';
//   div.style.left = `${event.clientX}px`;
//   div.style.top = `${event.clientY}px`;
//   document.body.append(div);
//   current = div;
//
// });

window.addEventListener('popstate', (e) => {
  console.log(e);
});

setTimeout(() => {
  window.history.pushState(null, null, '/login');
}, 4000);
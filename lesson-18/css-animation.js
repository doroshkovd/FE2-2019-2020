const anim1 = document.getElementById('animated');
const anim2 = document.getElementById('animated2');

setTimeout(() => {
  anim1.style.background = '#01ff04';
}, 3000);

anim1.addEventListener('transitionend', () => {
  console.log('Transition was ended');
  anim2.style.left = '200px';
});


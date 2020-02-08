function getOffsetWidth() {
  return document.body.offsetWidth;
}

const el = document.querySelector('.animated');
let dx = 10;
el.style.left = '0px';
let limit = getOffsetWidth();
const animationTime = 10000;

function draw(time) {
  if (time - initTime < animationTime) {
    if (time - initTime < animationTime / 2) {
      dx = dx - dx * 0.01;
    } else {
      dx = dx + dx * 0.01;
    }
    limit === 0 ? leftLimit() : rightLimit();
    requestAnimationFrame(draw);
  }

}

function rightLimit() {
  if (parseInt(el.style.left) + el.clientWidth + dx < limit) {
    el.style.left = getLeftValue();
  } else {
    dx = -dx;
    limit = 0;
  }
}

function leftLimit() {
  if (parseInt(el.style.left) + dx > limit) {
    el.style.left = getLeftValue();
  } else {
    limit = getOffsetWidth();
    dx = -dx;
  }
}

function getLeftValue() {
  return `${parseInt(el.style.left) + dx}px`;
}

const initTime = performance.now();


requestAnimationFrame(draw);
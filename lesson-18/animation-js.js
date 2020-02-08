document.addEventListener('DOMContentLoaded', () => {
  const fps = 30;
  const el = document.querySelector('.animated');
  let dx = 1;
  el.style.left = '0px';
  let limit = getOffsetWidth();

  window.addEventListener('resize', () => {
    if (!!limit) {
      console.log('change window');
      limit = getOffsetWidth();
    }
  });

  const idInterval = setInterval(() => {
    limit === 0 ? leftLimit() : rightLimit();
  }, 1000 / fps);

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

  function getOffsetWidth() {
    return document.body.offsetWidth;
  }
});

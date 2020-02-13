const bgCanvas = document.createElement('canvas');
const animateCanvas = document.createElement('canvas');

const bgCtx = bgCanvas.getContext('2d');
const animateCtx = animateCanvas.getContext('2d');

const width = 480;
const radius = 200;



//set bgCanvas size
bgCanvas.width = width;
bgCanvas.height = width;

//set animateCanvas size
animateCanvas.height = width;
animateCanvas.width = width;
animateCtx.translate(240, 240);

const styles = {
  position: 'absolute',
};

bgCanvas.styles = Object.assign(bgCanvas.style, styles, {display: 'block', zIndex: '1', backgroundColor: '#ccc'});
animateCanvas.styles = Object.assign(animateCanvas.style, styles, {display: 'block', zIndex: '2'});
document.body.appendChild(bgCanvas);
document.body.appendChild(animateCanvas);


function drawDisk() {
  bgCtx.translate(240, 240);
  bgCtx.beginPath();
  bgCtx.fillStyle = '#333';
  bgCtx.arc(0, 0, radius, 0, 2 * Math.PI);
  bgCtx.fill();
  bgCtx.closePath();
  createNumbers();
}

function createNumbers() {
  for(let num = 1; num < 13; num++){
    let ang = num * Math.PI / 6;
    bgCtx.rotate(ang);
    bgCtx.translate(0, - radius * 0.85);
    bgCtx.rotate(-ang);
    bgCtx.beginPath();
    bgCtx.fillStyle = '#fff';
    bgCtx.arc(0, 0, 23, 0, 2 * Math.PI);
    bgCtx.fill();
    bgCtx.fillStyle = '#333';
    bgCtx.font = radius * 0.10 + "px arial";
    bgCtx.fillText(num.toString(),-5, 5);
    bgCtx.rotate(ang);
    bgCtx.translate(0, radius*0.85);
    bgCtx.rotate(-ang);
  }

  bgCtx.closePath();
}

function drawAnimationPart() {
  animateCtx.clearRect(-240, -240, 480, 480);
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  //hour
  hour = hour % 12;
  hour = ( hour * Math.PI / 6) +
    ( minute * Math.PI / ( 6 * 60 )) +
    ( second * Math.PI / (360 * 60));
  drawHand(animateCtx, hour, radius * 0.5, radius * 0.07);
  //minute
  minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
  drawHand(animateCtx, minute, radius * 0.8, radius * 0.07);
  // second
  second = (second * Math.PI / 30);
  drawHand(animateCtx, second, radius * 0.9, radius * 0.02);
  animateCtx.fillStyle = 'red';
  animateCtx.font = radius * 0.10 + "px arial";
  animateCtx.fillText(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,-50, -50);
  requestAnimationFrame(drawAnimationPart);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

drawDisk();
drawAnimationPart();
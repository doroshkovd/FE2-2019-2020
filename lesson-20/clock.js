const bgCanvas = document.createElement('canvas');
const clockCanvas = document.createElement('canvas');
const bgCtx = bgCanvas.getContext('2d');
const clockCtx = clockCanvas.getContext('2d');
bgCanvas.width = 480;
bgCanvas.height = 480;
clockCanvas.width = 480;
clockCanvas.height = 480;
const radius = 200;
clockCtx.translate(240, 240);


bgCanvas.styles = Object.assign(bgCanvas.style, {backgroundColor: '#333', display: 'block', position: 'absolute', zIndex: '1'});
clockCanvas.styles = Object.assign(clockCanvas.style, {display: 'block', position: 'absolute', zIndex: '2'});

document.body.appendChild(bgCanvas);
document.body.appendChild(clockCanvas);

function createClock() {
  bgCtx.translate(bgCanvas.width / 2, bgCanvas.height / 2);
  bgCtx.beginPath();
  bgCtx.fillStyle = '#fff';
  bgCtx.arc(0, 0, radius, 0, 2 * Math.PI);
  bgCtx.fill();
  bgCtx.closePath();
  bgCtx.fillStyle = 'red';
  createNumbers();

}

function createNumbers(x, y) {
  for(num = 1; num < 13; num++){
    let ang = num * Math.PI / 6;
    bgCtx.rotate(ang);
    bgCtx.translate(0, - radius * 0.85);
    bgCtx.rotate(-ang);
    bgCtx.beginPath();
    bgCtx.fillStyle = 'green';
    bgCtx.arc(0, 0, 23, 0, 2 * Math.PI);
    bgCtx.fill();
    bgCtx.fillStyle = '#fff';
    bgCtx.font = radius * 0.10 + "px arial";
    bgCtx.fillText(num.toString(),-5, 5);
    bgCtx.rotate(ang);
    bgCtx.translate(0, radius*0.85);
    bgCtx.rotate(-ang);
  }

  bgCtx.closePath();
}

function drawAnimationPart() {
  clockCtx.clearRect(-240, -240, 480, 480);
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  //hour
  hour = hour % 12;
  hour = ( hour * Math.PI / 6) +
    ( minute * Math.PI / ( 6 * 60 )) +
    ( second * Math.PI / (360 * 60));
  drawHand(clockCtx, hour, radius * 0.5, radius * 0.07);
  //minute
  minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
  drawHand(clockCtx, minute, radius * 0.8, radius * 0.07);
  // second
  second = (second * Math.PI / 30);
  drawHand(clockCtx, second, radius * 0.9, radius * 0.02);
  clockCtx.fillStyle = 'red';
  clockCtx.font = radius * 0.10 + "px arial";
  clockCtx.fillText(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,-50, -50);
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

createClock();
drawAnimationPart();
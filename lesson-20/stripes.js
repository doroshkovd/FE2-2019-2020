const canvas = document.createElement('canvas');
canvas.width = 1000;
canvas.height = 800;
canvas.style.backgroundColor = '#333';
const ctx = canvas.getContext('2d');

const num = 83;

const color1 = 'red';
const color2 = 'green';
const width = 12;

console.time('stripes');
document.body.append(canvas);
// for (let i = 0; i <= num; i++) {
//   ctx.fillStyle = (i % 2 === 0) ? color1 : color2;
//   ctx.fillRect(i * width, 0, width, canvas.height);
// }
ctx.fillStyle = color1;
for (let i = 0; i <= num; i +=2) {
  ctx.fillRect(i * width, 0, width, canvas.height);
}
ctx.fillStyle = color2
for (let i = 1; i <= num; i +=2) {
  ctx.fillRect(i * width, 0, width, canvas.height);
}

console.timeEnd('stripes');
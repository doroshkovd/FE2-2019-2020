const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Config vars
let x = canvas.width / 2;
let y = canvas.height - 30;
const ballRadius = 5;
const mainFillCollor = '#0095DD';
const mainStrokeStyle = '#333';
let dx = 2;
let dy = -2;
let rightPressed = false;
let leftPressed = false;
const accelerate = 0.1;
const times = [];

// bricks
const bricksRowCounts = 3;
const bricksColumnCounts = 5;
const brickWidth = 75;
const brickHeights = 20;
const brickPadding = 10;
const bricksOffsetTop = 30;
const bricksOffsetLeft = 30;
let lives = 3;

let score = 0;

const bricks = [];

for (let c = 0; c < bricksColumnCounts; c++) {
  bricks[c] = [];
  for (let r = 0; r < bricksRowCounts; r++) {
    bricks[c][r] = {x: 0, y: 0, status: 2};
  }
}

function drawBricks() {
  for (let c = 0; c < bricksColumnCounts; c++) {
    for (let r = 0; r < bricksRowCounts; r++) {
      if (bricks[c][r].status === 1 || bricks[c][r].status === 2) {
        let brickX = (c * (brickWidth + brickPadding)) + bricksOffsetLeft;
        let brickY = (r * (brickHeights + brickPadding)) + bricksOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeights);
        ctx.fillStyle = bricks[c][r].status === 2 ? 'red' : mainFillCollor;
        ctx.strokeStyle = mainStrokeStyle;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}

const paddleHeights = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
document.addEventListener('mousemove', mouseMoveHandler);

function keyDownHandler(event) {
  if (event.keyCode === 39) {
    rightPressed = true;
  } else if (event.keyCode === 37) {
    leftPressed = true;
  }
}

function keyUpHandler(event) {
  if (event.keyCode === 39) {
    rightPressed = false;
  } else if (event.keyCode === 37) {
    leftPressed = false;
  }
}

function mouseMoveHandler(event) {
  let mouseX = event.clientX - canvas.offsetLeft;
  if (mouseX > 0 && mouseX < canvas.width) {
    paddleX = mouseX - paddleWidth / 2;
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = mainFillCollor;
  ctx.strokeStyle = mainStrokeStyle;
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeights, paddleWidth, paddleHeights);
  ctx.fillStyle = mainFillCollor;
  ctx.strokeStyle = mainStrokeStyle;
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawScore() {
  ctx.font = '16px Arial';
  ctx.fillStyle = mainFillCollor;
  ctx.fillText(`Score: ${score}`, 8, 20);
}

function drawLives() {
  ctx.font = '18px Arial';
  ctx.fillStyle = mainFillCollor;
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}

function drawFPS(fps) {
  ctx.font = '18px Arial';
  ctx.fillStyle = 'red';
  ctx.fillText(`FPS: ${fps}`, 20, canvas.height - 10);
}

function countFPS() {
  let now = Date.now();
  if (times.length > 0 && times[0] < now - 1000) {
    times.shift();
  }

  times.push(now);
  return times.length;
}

function collisionDetection() {
  for (let c = 0; c < bricksColumnCounts; c++) {
    for (let r = 0; r < bricksRowCounts; r++) {
      const brick = bricks[c][r];
      if ((brick.status === 1 || brick.status === 2) &&
        x > brick.x + ballRadius &&
        x < brick.x + brickWidth + ballRadius &&
        y > brick.y + ballRadius &&
        y < brick.y + brickHeights + ballRadius
      ) {
        dy = - dy;
        brick.status -= 1;

        if (brick.status === 0) {
          score += 1;
        }
        dx = dx + dx * accelerate;
        dy = dy + dy * accelerate;
        if (score === bricksColumnCounts * bricksRowCounts) {
          alert('You are winner!!!');
          document.location.reload();
        }
      }
    }
  }

}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFPS(countFPS());
  drawScore();
  drawLives();
  collisionDetection();
  drawBricks();
  drawPaddle();
  drawBall();

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }


  if (x + dx < ballRadius || x + dx > canvas.width - ballRadius) {
    dx = -dx;
  }

  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      lives -= 1;
      if (!lives) {
        alert('GAME OVER');
        document.location.reload();
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 2;
        dy = -2;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }
  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}


draw();
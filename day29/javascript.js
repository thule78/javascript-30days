// select the element on the page - cavas, shake button
const canvas = document.querySelector('#etch-a-sketch');

const ctx = canvas.getContext('2d');

const shakeBtn = document.querySelector('.shake');

// setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas
const { width, height } = canvas;
console.log(width, height);
const MOVE_AMOUNT = 10;

let x = Math.floor(Math.random()* width);
let y = Math.floor(Math.random()* height);
let hue = 0;

// create random x and y starting points on the canvas
ctx.strokeStyle = `hsl(#{Math.random()*360}, 100%, 50%)`
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;


// write a draw function
function draw({ key }) {
  //increment hue
  hue += 5;
  console.log(key);
  ctx.beginPath(); //start point
  ctx.moveTo(x, y);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  // move our x and y values depending on what the user did
  switch (key) {
    case 'ArrowUp':
    y -= MOVE_AMOUNT;
    break;
    case 'ArrowLeft':
    x -= MOVE_AMOUNT;
    break;
    case 'ArrowRight':
    x += MOVE_AMOUNT;
    break;
    case 'ArrowDown':
    y += MOVE_AMOUNT;
    break;

  default:
    break;
  }
  ctx.lineTo(x, y)
  ctx.stroke();
}

// write a handler for the keys

function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key })
  }
}

// clear/shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0,0, width, height);
  canvas.addEventListener('animationend', function() {
    canvas.classList.remove('shake');
  }, { once: true});
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeBtn.addEventListener('click', clearCanvas);


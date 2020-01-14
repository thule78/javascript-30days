
const ninja = document.querySelector('.ninja');
let x = 0;
let y = 0;
const speed = 5;
let flipp = false;
let rotate = 0;

function handleMove(e) {
  if (!e.key.includes('Arrow')) { return};

  switch (e.key) {
    case 'ArrowUp':
    y = y - 1;
    rotate = -0;
    break;

    case 'ArrowDown':
    y = y + 1;
    rotate = 180;
    break;

    case 'ArrowLeft':
    x = x - 1;
    rotate = -90;
    break;

    case 'ArrowRight':
    x = x + 1;
    rotate = 90;
    break;

    default:
    console.log('not move');
    break;
  }

  console.log(x,y);
  ninja.setAttribute('style',`

      --x: ${x * speed}px;
      --y: ${y * speed}px;
      --rotate: ${rotate}deg;
    `)

}


window.addEventListener('keydown', handleMove);

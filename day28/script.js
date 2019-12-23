const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');
function handleClick() {
  console.log('My butt get click!');
}

function handleCool() {
  console.log("I'm Cool");
}

butts.addEventListener('click', handleClick);
cool.addEventListener('click', handleCool);

/*-----*/
const buybutts = document.querySelectorAll('.buybutts');

function buyMe() {
  console.log('Buy buy me');
}

buybutts.forEach(buybutt => {buybutt.addEventListener(('click'), buyMe)});

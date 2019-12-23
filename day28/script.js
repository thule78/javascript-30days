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

function buyMe(event) {
  //console.log(button.textContent);
  //console.log(parseFloat(event.target.dataset.price));
  console.log('Buy buy me');
  console.log(event.target);
  console.log(event);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  //stop this event from bubbling up
  event.stopPropagation();
}

buybutts.forEach(buybutt => {buybutt.addEventListener(('click'), buyMe)});
window.addEventListener('click', function (event) {
  event.stopPropagation();
  console.log("window was click");
  console.log(event.target);
}, {capture: true})

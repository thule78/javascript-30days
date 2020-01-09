const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
  console.log(payload[0].intersectionRatio);
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    console.log('remove disabled');
    ob.unobserve(terms.lastElementChild);
  }
}
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});//new


ob.observe(terms.lastElementChild);


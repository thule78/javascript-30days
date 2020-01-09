const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

function obCallback(payload) {
  console.log(payload);

  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    //stop observing the button
    ob.unobserve(terms.lastElementChild);
  }
}

const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});


ob.observe(terms.lastElementChild);


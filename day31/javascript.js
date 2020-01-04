const cardBtns = document.querySelectorAll('.card');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardBtnClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  // grab the image src
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;

  // populate the modal width the new info
  modalInner.innerHTML = `
  <img src="${imgSrc.replace('200', '600')}" alt="${name}" />
  <p> ${desc} </p>`

  // show the modal
  modalOuter.classList.add('open');
}

cardBtns.forEach(button => button.addEventListener('click', handleCardBtnClick))

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
}

})

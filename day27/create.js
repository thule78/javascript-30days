console.log('Hi DOM');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a p';
myParagraph.classList.add('special');
console.log(myParagraph);

const photo = document.createElement('img');
photo.src = "https://picsum.photos/200/300";
photo.alt = "radom photo";
console.log(photo);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

const body = document.querySelector('body');
body.appendChild(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(photo);

const heading = document.createElement('h2');
heading.textContent = 'Hello Heading';

myParagraph.insertAdjacentElement('beforebegin', heading);

myDiv.insertAdjacentHTML('beforeend', '<div class="text">this is insertAdjacentHTML</div>');

const myUl = document.createElement('ul');
myUl.classList.add('list');

const liOne = document.createElement('li');
liOne.textContent = 'One';
const liTwo = document.createElement('li');
liTwo.textContent = 'Two';
const liThree = document.createElement('li');
liThree.textContent = 'Three';
const liFour = document.createElement('li');
liFour.textContent = 'Four';
const liFive = document.createElement('li');
liFive.textContent = 'Five';

photo.insertAdjacentElement('afterend', myUl);
myUl.insertAdjacentElement('afterbegin', liThree);
liThree.insertAdjacentElement('beforebegin',liTwo);
liTwo.insertAdjacentElement('beforebegin', liOne);
liThree.insertAdjacentElement('afterend',liFour);
liFour.insertAdjacentElement('afterend', liFive);


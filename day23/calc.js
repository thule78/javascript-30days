let runningTotal = 0;
let buffer = "0";
let previousPoerator;

const screen = document.querySelector('.screen');

const calcButtons = document.querySelectorAll('.cacl-button');

function buttonClick() {
  const value = this.innerText;
  isNaN(value) ? handleSymbol(value) : handleNumber(value);
};

function handleSymbol(symbol) {
  console.log("hi symbol");
};

function handleNumber(numberString) {
  if(buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
  screen.innerText = buffer;
};

calcButtons.forEach(calcButton => calcButton.addEventListener('click', buttonClick))

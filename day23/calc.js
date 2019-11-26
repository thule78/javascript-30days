let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

const calcButtons = document.querySelectorAll('.cacl-button');

function buttonClick() {
  const value = this.innerText;
  isNaN(value) ? handleSymbol(value) : handleNumber(value);
  screen.innerText = buffer;
};

function handleSymbol(symbol) {
  console.log(symbol);
  if(symbol === "C") {
    buffer = "0";
    runningTotal = 0;
  } else {
    handleMath(symbol);
  }

};

function handleMath(symbol) {
  console.log("hello math");

  if(buffer === "0") {
    return;
  }

  const intBuffer = parseInt(buffer);

  if(runningTotal === 0) {
    console.log('hello mess');
    previousOperator = symbol;
    buffer = 0;
    runningTotal = intBuffer;
  } else {



    if(previousOperator === "+") {
      runningTotal += intBuffer;
    } else if (previousOperator === "−") {
      runningTotal -= intBuffer;
    }else if (previousOperator === "×") {
      runningTotal *= intBuffer;
    }else {
      runningTotal /= intBuffer;
    }
  }

};


function handleNumber(numberString) {
  if(buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
};

calcButtons.forEach(calcButton => calcButton.addEventListener('click', buttonClick))

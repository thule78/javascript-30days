let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

const screen = document.querySelector('.screen');

const calcButtons = document.querySelectorAll('.cacl-button');

function buttonClick() {
  const value = this.innerText;
  isNaN(value) ? handleSymbol(value) : handleNumber(value);
  screen.innerText = buffer;
};

function handleMath(symbol) {
  if(buffer === "0") {
    return;
  }

  const intBuffer = parseInt(buffer);

  if(runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = symbol;
  buffer = "0" ;

};

function flushOperation(intBuffer){
  if(previousOperator === '+') {
    runningTotal += intBuffer;
  } else if (previousOperator === '−') {
    runningTotal -= intBuffer;
  } else if (previousOperator === '×') {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
  console.log(runningTotal);
}

function handleSymbol(symbol) {
  console.log(symbol);
  if(symbol === "C") {
    buffer = "0";
    runningTotal = 0;
  } else if (symbol === "=") {
    if(previousOperator === null) {
      return;
    } else {
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0 ;
    }
  } else if(symbol === '←') {
    if(buffer.length === 1) {
      buffer = "0";
    }else {
      buffer = buffer.substring(0, buffer.length -1);
    }
  }
   else {
    handleMath(symbol);
  }

};

function handleNumber(numberString) {
  if(buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
  console.log(buffer);
};

calcButtons.forEach(calcButton => calcButton.addEventListener('click', buttonClick))

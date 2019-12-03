

//console.log(docterize('Thu')); this does not work because function inside varible

console.log(docterize2('Wes'));
//This work because it's function and hoist will put function up on the top

//function expression, function inside varible
const docterize = function(firstName) {
  return `Dr ${firstName}`;
};

function docterize2(firstName) {
  return `Ph.Dr. ${firstName}`;
};

// Arrow functions
const inchToCM = (inches) => inches * 2.54;

// function add(a, b = 4) {
//   const total = a + b
//   return total;
// };

//convert to arrow function
const add = (a, b = 3) => a + b;

// function makeBaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   };
//   return baby;
// }
//cover to arrow function
// const makeBaby = (first, last) => {
//   const baby = {
//     name: `${first} ${last}`,
//     age : 0
//   }
//   return baby;
// }
// or convert to arrow function like this
const makeBaby = (first, last) => ({name: `${first} ${last}`, age: 0});

//IIFE
// Immediately Invoked Function Expression
(function(age) {
  return `You are at age ${age}`;
})(10);

// methods
const wes = {
  //method
  sayHi: function() {
    return 'Hey Wes';
  },
  // short hand Method
  yellHi() {
    console.log('HEY WESSSS')
  },
  // Arrow function
  wisperHi: () => {
    console.log('hii wess');
  }
};

// callback functions
//click callback
const button = document.querySelector('.click')
button.addEventListener('click', wes.yellHi);


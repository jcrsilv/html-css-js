let count = 0;
const counterDiv = document.getElementById('counter');
counterDiv.innerHTML = count;

const addButton = document.getElementsByClassName('adder');
const resetButton = document.getElementsByClassName('reset');

const addToCounter = () => {
  count += 1;
  counterDiv.innerHTML = count;
};

const resetCounter = () => {
  count = 0;
  counterDiv.innerHTML = count;
  alert('your counter was reseted');
};

'use strict';

const check_btn = document.querySelector('.check');
check_btn.addEventListener('click', changeNumber);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const number = document.querySelector('.number');

// functions
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function showScore(score) {
  document.querySelector('.score').textContent = score;
}

function changeNumber() {
  const guessNumber = Number(document.querySelector('.guess').value);

  // when the value is null
  if (!guessNumber) {
    displayMessage('No Number 😘');
  }

  // when the player wins
  else if (guessNumber === secretNumber) {
    displayMessage('Correct Number 🎯');
    document.querySelector('body').style.backgroundColor = 'green';
    number.style.width = '30rem';
    // secret number block
    number.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;

    // when guess number is not equal
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      score--;
      showScore(score);
      // using ternery operator
      guessNumber > secretNumber
        ? displayMessage('Too High 👼')
        : displayMessage('Too Low 👼');
    }
  }
}

// again button
const again = document.querySelector('.again');
again.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  showScore(score);
  document.querySelector('.guess').value = '';
  number.textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});

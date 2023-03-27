'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// SECRET NUMBER
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// document.querySelector('.number').textContent = secretNumber;

// CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //NOT NUMBER
  if (!guess) {
    // document.querySelector('.message').textContent = 'Not a number!!';
    displayMessage('Not a number!!');

    //CORRECT NUMBER
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number !';
    displayMessage('Correct Number !');
    //background color
    document.querySelector('body').style.backgroundColor = '#0bad26';
    //number width
    document.querySelector('.number').style.width = '30rem';
    //secret number
    document.querySelector('.number').textContent = secretNumber;

    //HIGTSCORE
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //NUMBER TO HIGH:LOW
    //refactoring
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'The number to high!' : 'The number to low!';
      displayMessage(
        guess > secretNumber ? 'The number to high!' : 'The number to low!'
      );
      score--; //score decreaser
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      // document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = '0';
    }
  }
  //NUMBER TO HIGH
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'The number to high!';
  //     score--; //score decreaser
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = '0';
  //   }

  //   //NUMBER TO LOW
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     //NUMBER TO LOW
  //     document.querySelector('.message').textContent = 'The number to low!';
  //     score--; //score decreaser
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = '0';
  //   }
  // }
});

//AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Guess My Number!');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#132264';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

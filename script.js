'use strict';

//Creating our variables
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

//Just testing secret number
//document.querySelector('.number').textContent = secretNumber;

//On click function for check button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //if else statements for diff outcomes 

    if (!guess) {
        //when there is nothing entered in
        document.querySelector('.message').textContent = 'No number!';
        //when the player guesses correctly
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct Number!";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        //when the guess is higher than the secretNumber
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too high!";
            score--;
        } else {
            document.querySelector('.message').textContent = "You lost the game!"
        }
        document.querySelector('.score').textContent = score;
        //when the guess is lower than the secretNumber
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too low!"
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You lost the game!"
            document.querySelector('.score').textContent = 0;
        }
    }
});

//on click function for again btn
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
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
        document.querySelector('.message').textContent = 'No number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct Number!";
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too high!";
            score--;
        } else {
            document.querySelector('.message').textContent = "You lost the game!"
        }
        document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = "Too low!"
        score--;
        document.querySelector('.score').textContent = score;
    }
});
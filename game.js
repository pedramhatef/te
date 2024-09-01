// game.js

const secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    const result = document.getElementById('result');

    if (guess === secretNumber) {
        result.textContent = "Congratulations! You guessed right.";
    } else {
        result.textContent = "Try again!";
    }
}

// Optional: You can include Telegram Web Apps SDK integration here if needed
document.addEventListener("DOMContentLoaded", function() {
    const tg = window.Telegram.WebApp;
    tg.ready();
});

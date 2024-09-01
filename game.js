// game.js

let secretNumber = generateSecretNumber();

function generateSecretNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    const result = document.getElementById('result');

    if (guess === secretNumber) {
        result.textContent = "Congratulations! You guessed right. Starting a new game...";
        setTimeout(() => {
            // Restart the game
            secretNumber = generateSecretNumber();
            document.getElementById('guess').value = ''; // Clear the input
            result.textContent = ''; // Clear the result message
        }, 2000); // 2-second delay before restarting
    } else {
        result.textContent = "Try again!";
    }
}

// Optional: You can include Telegram Web Apps SDK integration here if needed
document.addEventListener("DOMContentLoaded", function() {
    const tg = window.Telegram.WebApp;
    tg.ready();
});

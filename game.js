// game.js

let secretNumber = generateSecretNumber();

function generateSecretNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    const result = document.getElementById('result');
    const restartButton = document.getElementById('restartButton');

    if (guess === secretNumber) {
        result.textContent = "Congratulations! You guessed right.";
        restartButton.style.display = 'block'; // Show restart button
    } else {
        result.textContent = "Try again!";
    }
}

function restartGame() {
    secretNumber = generateSecretNumber(); // Generate a new secret number
    document.getElementById('guess').value = ''; // Clear the input field
    document.getElementById('result').textContent = ''; // Clear the result message
    document.getElementById('restartButton').style.display = 'none'; // Hide the restart button
}


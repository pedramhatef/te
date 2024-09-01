// game.js

let secretNumber = generateSecretNumber();

function generateSecretNumber() {
    return Math.floor(Math.random() * 5) + 1; // Generates a number between 1 and 5
}

function checkGuess(guess) {
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
    document.getElementById('result').textContent = ''; // Clear the result message
    document.getElementById('restartButton').style.display = 'none'; // Hide the restart button
}


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
        disableButtons(); // Disable all buttons after a correct guess
    } else {
        result.textContent = "Try another number!";
    }
}

function restartGame() {
    secretNumber = generateSecretNumber(); // Generate a new secret number
    document.getElementById('result').textContent = ''; // Clear the result message
    document.getElementById('restartButton').style.display = 'none'; // Hide the restart button
    enableButtons(); // Enable all buttons for a new game
}

function disableButtons() {
    const buttons = document.querySelectorAll('#buttons button');
    buttons.forEach(button => button.disabled = true); // Disable all buttons
}

function enableButtons() {
    const buttons = document.querySelectorAll('#buttons button');
    buttons.forEach(button => button.disabled = false); // Enable all buttons
}

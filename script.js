// script.js

let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number
let attempts = 0; // Initialize the attempts counter

// Get elements from the DOM
let guessInput = document.getElementById('guess');
let feedback = document.getElementById('feedback');
let submitButton = document.getElementById('submit');
let restartButton = document.getElementById('restart');

// Add event listener for the "Submit" button
submitButton.addEventListener('click', function () {
  let userGuess = parseInt(guessInput.value); // Get user input
  attempts++; // Increment attempts

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Please enter a valid number between 1 and 100.";
    attempts--; // Do not count invalid guesses
    return;
  }

  if (userGuess === randomNumber) {
    feedback.innerHTML = `🎉 Excellent! You guessed the number in <strong>${attempts}</strong> attempts!`;
    submitButton.classList.add('hidden'); // Hide the Submit button
    restartButton.classList.remove('hidden'); // Show the Restart button
  } else if (userGuess < randomNumber) {
    feedback.textContent = `📉 Too low! Attempts: ${attempts}`;
  } else {
    feedback.textContent = `📈 Too high! Attempts: ${attempts}`;
  }
});

// Add event listener for the "Restart" button
restartButton.addEventListener('click', function () {
  // Reset the game state
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0; // Reset attempts counter
  feedback.textContent = "";
  guessInput.value = "";
  submitButton.classList.remove('hidden'); // Show the Submit button
  restartButton.classList.add('hidden'); // Hide the Restart button
});

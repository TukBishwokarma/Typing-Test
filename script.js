const testParagraph = document.getElementById('testParagraph');
const inputBox = document.getElementById('inputBox');
const startBtn = document.getElementById('startBtn');
const result = document.getElementById('result');

let startTime, endTime;

// Start the test
startBtn.addEventListener('click', () => {
  inputBox.value = ''; // Clear input box
  inputBox.disabled = false; // Enable input box
  inputBox.focus(); // Focus the input box
  result.innerHTML = ''; // Clear previous result

  startTime = new Date().getTime(); // Start the timer
  startBtn.disabled = true; // Disable start button during typing
});

// Check typing progress
inputBox.addEventListener('input', () => {
  const typedText = inputBox.value; // Get the user input
  const originalText = testParagraph.innerText; // Get the original paragraph text

  if (typedText === originalText) {
    endTime = new Date().getTime(); // End the timer
    const totalTime = (endTime - startTime) / 1000; // Calculate total time in seconds

    const wordCount = originalText.split(' ').length; // Count words in the original text
    const typingSpeed = Math.round((wordCount / totalTime) * 60); // Calculate WPM (words per minute)

    // Display the result
    result.innerHTML = `You typed ${wordCount} words in ${totalTime.toFixed(2)} seconds.<br>Your typing speed is ${typingSpeed} words per minute (WPM).`;

    // Reset
    startBtn.disabled = false; // Re-enable the start button
    inputBox.disabled = true; // Disable input box after finishing
  }
});

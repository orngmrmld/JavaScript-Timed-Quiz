
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var correctAnswers = [];
var incorrectAnswers = [];

var timer;
var timerCount;
var correctcounter = 0;
var incorrectcounter = 0;

// add question bank to replace in heaader every new question

var questions = [

  { q: 'What does HTML stand for?', 
    a: 'b. HyperText Markup Language', 
    choices: [{choice: 'a. HyperText Made Link'}, {choice: 'b. HyperText Markup Language'}, {choice: 'c. HyperText Made Language'}, {choice: 'd. HyperText Marked Link'}]
  },
  { q: 'What is CSS?', 
    a: 'a. Cascading Style Sheets', 
    choices: [{choice: 'a. Cascading Style Sheets'}, {choice: 'b. Coding Style Sheets'}, {choice: 'c. Color Style Sheets'}, {choice: 'd. Cascading Sheet Styles'}]
  },
  
  { q: 'Inside which HTML element do we put the JavaScript?', 
    a: 'c. script', 
    choices: [{choice: 'a. javascript'}, {choice: 'b. scripting'}, {choice: 'c. script'},{choice:'d. src'}]
  },
  { q: 'The first index of an array is', 
    a: 'a. 0', 
    choices: [{choice: 'a. 0'}, {choice: 'b. 1'}, {choice: 'c. 2'}, {choice: 'd. 3'}]
  },
  { q: 'Arrays in JavaScript can be used to store', 
    a: 'c. other arrays', 
    choices: [{choice: 'a. booleans'}, {choice: 'b. numbers & strings'}, {choice: 'c. other arrays'}, {choice: 'd. all of the above'}]
    },
  ];































  

// function init() {

// }

// // The startGame function is called when the start button is clicked
// function startGame() {
  
//   timerCount = 10;
//   // Prevents start button from being clicked when round is in progress
//   startButton.disabled = true;
//   renderBlanks()
//   startTimer()
// }

// function correctAnswer() {
//   wordBlank.textContent = "Answer Correct! ";
//   correctcounter++;
//   startButton.disabled = false;
//   setCorrect();
// }

// function incorrectAnswer() {
//   wordBlank.textContent = "Wrong answer.";
//   incorrectcounter++;
//   startButton.disabled = false;
//   setIncorrect();
// }

// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//   // Sets timer
//   timer = setInterval(function() {
//     timerCount--;
//     timerElement.textContent = timerCount;
//     if (timerCount >= 0) {
//       // Tests if win condition is met
//       if (isWin && timerCount > 0) {
//         // Clears interval and stops timer
//         clearInterval(timer);
//         winGame();
//       }
//     }
//     // Tests if time has run out
//     if (timerCount === 0) {
//       // Clears interval
//       clearInterval(timer);
//       loseGame();
//     }
//   }, 1000);
// }


// //updates correct answers on screen and sets correct count to client storage
// function setCorrect() {
//   correct.textContent = correctcounter;
//   localStorage.setItem("correctCount", correctcounter);
// }

// // Updates incorrect answers on screen and sets incorrect count to client storage
// function setIncorrect() {
//   incorrect.textContent = incorrectcounter;
//   localStorage.setItem("incorrectCount", incorrectcounter);
// }

// // These functions are used by init
// function getCorrect() {
//   // Get stored value from client storage, if it exists
//   var storedCorrect = localStorage.getItem("correctCount");
//   // If stored value doesn't exist, set counter to 0
//   if (storedCorrect === null) {
//     correctcounter = 0;
//   } else {
//     // If a value is retrieved from client storage set the winCounter to that value
//     correctCount = storedCorrect;
//   }
//   //Render win count to page
//   correct.textContent = correctcounter;
// }

// function getlosses() {
//   var storedincorrect = localStorage.getItem("incorrectCount");
//   if (storedincorrect === null) {
//     incorrectcounter = 0;
//   } else {
//     incorrectcounter = storedincorrect;
//   }
//   incorrect.textContent = incorrectcounter;
// }




// //check if the pressed answer is the correct one


// // Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startGame);

// // Calls init() so that it fires when page opened
// init();


// var resetButton = document.querySelector(".reset-button");

// function resetGame() {
//   // Resets correct and incorrect answer counts
//   winCounter = 0;
//   loseCounter = 0;
//   // Renders correct and incorrect counts and sets them into client storage
//   setWins()
//   setLosses()
// }
// // Attaches event listener to button
// resetButton.addEventListener("click", resetGame);

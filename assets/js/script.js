var startContainer = document.getElementsById("start-container");
var questionContainer = document.getElementById("question-container");
var finishContainer = document.getElementById("finish-container");
var scoreBanner = document.getElementById("score-banner");
var formInitials = document.getElementsById("initials-form");
var highScoreContainer = document.getElementById("high-score-container");
var viewHighScoreList = document.getElementById("high-score-list");
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");
var startButton = document.querySelector(".start-button");
var returnButton = document.querySelector("#go-back");
var clearButton = document.querySelector("#clear-high-scores");
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var timerElement = document.querySelector(".timer-count");
var timer;
var timerCount;
var mixedQuestions;
var questionIndex= 0;
var score = 0;
var timeleft;
var gameover;

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

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function setTime() {
  timeleft = 100;

var timercheck = setInterval(function() {
  timerElement.innerText = timeleft;
  timeleft--

  if (gameover) {
      clearInterval(timercheck)
  }
 
  if (timeleft < 0) {
      showScore()
      timerElement.innerText = 0
      clearInterval(timercheck)
  }

  }, 1000)
}


//Display a question from the array
function displayQuestion(index) {
  questionElement.innerText = index.q;
  for (var i = 0; i <index.choices.length; i++){
    var answerBtn = document.createElement('button')
    answerBtn.innerText = index.choices[i].choice;
    answerBtn.classList.add('btn');
    answerBtn.classList.add('answerbtn');
    answerBtn.addEventListener("click", answerCheck);
    answerBtn.appendChild(answerBtn);

  }
};

//reset answers by removing buttons
function resetAnswers(){
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild());
  }
}

//create questions 
function createQuestions(){
  resetAnswers();
  displayQuestion(mixedQuestions[questionIndex]);
};


// check if the answer is right
function answerCheck(event){
  var selectedAns = event.target;
  if(mixedQuestions[questionIndex].a === selectedAns.innerText){
    //correctAns()
    score += 5;
  } else {
    //wrongAns()
    score -= 1; 
    timeleft -= 3;
  };
  questionIndex++;
  if(mixedQuestions.length>questionIndex +1 ){
    createQuestions();
  } 
  else {
    gameover = "true";
    //showscore
  }


} 



// display if correct or incorrect




















// var correctAnswers = [];
// var incorrectAnswers = [];
// var highScores = [];

// var correctcounter = 0;
// var incorrectcounter = 0;

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

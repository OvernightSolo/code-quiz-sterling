//VARIABLE SETUP
var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");
var shuffledQuestions, currentQuestionIndex;
var timerEl = document.getElementById("timer");
var minus10 = false;
var introQuip = document.getElementById("introQuip");
var timeLeft = 75;
var score = timeLeft;
var questionsRemaining = 4;

//CLICK EVENT THAT WILL INITIALIZE QUIZ
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  questionsRemaining--;
  console.log(questionsRemaining);
  nextQuestion();
});

//TIMER FUNCTION
function countdown() {
  var timeInterval = setInterval(function () {
    if (questionsRemaining === 0) {
      return;
    } else {
      if (timeLeft > 1) {
        if (minus10) {
          timeLeft -= 10;
          timerEl.textContent = timeLeft + " seconds left";
          minus10 = false;
        } else {
          timerEl.textContent = timeLeft + " seconds left";
          timeLeft--;
        }
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + " second left";
        timeLeft--;
      } else {
        timerEl.textContent = timeLeft + " seconds left";
        clearInterval(timeInterval);
        timerEl.textContent = "GAME OVER";
      }
    }
  }, 1000);
}

//LEAVE INTRO CARD AND RANDOMIZE QUESTION ORDER
function startQuiz() {
  introQuip.remove();
  countdown();
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerEl.classList.remove("hide");
  nextQuestion();
}

//INTRODUCE EACH QUESTION
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsEl.appendChild(button);
  });
}

//QUALIFY ANSWER AS CORRECT OR INCORRECT AND DISPLAY CORRESPONDING BUTTON AND BACKGROUND COLOR
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
    minus10 = true;
  }
}

//UPON NEXT QUESTION, CLEAR COLORS
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

//MOVE TO NEXT QUESTION AT RANDOM
function nextQuestion() {
  reset();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function reset() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild);
  }
}

//DETERMINE IF GAME IS OVER
function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsEl.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText =
      "Your score is " +
      timeLeft +
      ". Enter your score in the High Scores link, or refresh page to play again.";
    startButton.classList.remove("hide");
    countdown();
  }
  if (shuffledQuestions < currentQuestionIndex) {
    endQuiz();
  }
}

//IF GAME IS OVER, STOP THE TIMER
function endQuiz() {
  clearInterval(countdown);
}

//ARRAY OF QUIZ QUESTIONS
var questions = [
  {
    question: "Commonly used data types DO Not Include:",
    answers: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
    ],
  },
  {
    question: "The condition in an if / else statement is enclosed with:",
    answers: [
      { text: "quotes", correct: false },
      { text: "curly braces", correct: true },
      { text: "parentheses", correct: false },
      { text: "square brackets", correct: false },
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answers: [
      { text: "numbers/strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true },
    ],
  },
  {
    question:
      "String values must be enclosed with _______ when being assigned to variables.",
    answers: [
      { text: "commas", correct: false },
      { text: "curly braces", correct: false },
      { text: "quotes", correct: true },
      { text: "parentheses", correct: false },
    ],
  },
  {
    question:
      "A very useful tool to use during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "Javascript", correct: false },
      { text: "terminal/bash", correct: false },
      { text: "for loops", correct: false },
      { text: "console.log", correct: true },
    ],
  },
];

var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");
var shuffledQuestions, currentQuestionIndex;
var timerEl = document.getElementById("timer");

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  nextQuestion();
});

function startQuiz() {
  alert("The timer is about to begin.");
  countdown();
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerEl.classList.remove("hide");
  nextQuestion();
}

function nextQuestion() {
  reset();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

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

function reset() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild);
  }
}

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
    startButton.innerText = "Restart Quiz?";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

var questions = [
  {
    question: "My first question",
    answers: [
      { text: "answer 1", correct: false },
      { text: "answer 2", correct: false },
      { text: "answer 3", correct: true },
      { text: "answer 4", correct: false },
    ],
  },
  {
    question: "My second question",
    answers: [
      { text: "answer 1", correct: true },
      { text: "answer 2", correct: false },
      { text: "answer 3", correct: false },
      { text: "answer 4", correct: false },
    ],
  },
  {
    question: "My third question",
    answers: [
      { text: "answer 1", correct: false },
      { text: "answer 2", correct: false },
      { text: "answer 3", correct: false },
      { text: "answer 4", correct: true },
    ],
  },
  {
    question: "My fourth question",
    answers: [
      { text: "answer 1", correct: false },
      { text: "answer 2", correct: false },
      { text: "answer 3", correct: true },
      { text: "answer 4", correct: false },
    ],
  },
];

function countdown() {
  var sec = 30;
  console.log("timer suppose to go");
  var timer = setInterval(function () {
    sec--;
    document.getElementById("timer").innerHTML = sec;
    if (sec < 0) {
      clearInterval(timer);
      alert("Time is up!");
    }
  }, 1000);
}
document.getElementsByClassName("wrong").addEventListener("click", function () {
  sec -= 10;
  document.getElementById("timer").innerHTML = sec;
});

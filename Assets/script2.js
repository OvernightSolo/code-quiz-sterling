var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");
var shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  nextQuestion();
});

function startQuiz() {
  alert("The timer is about to begin.");
  startTimer();
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

var startingMinutes = 0.1;
var time = startingMinutes * 60;
var timer = setInterval;
var countdownEl = document.getElementById("timer");
setInterval(updateCountdown, 1000);

function startTimer() {
  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
      countdownEl.innerHTML = "Time's Up!";
    }
  }

  var start = document.getElementById("start-btn");

  start.addEventListener("click", function () {
    updateCountdown();
  });
}

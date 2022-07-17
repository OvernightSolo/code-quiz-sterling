//This is a short amount of time, just for testing. The final product will be a 3-minute timer.
const startingMinutes = 0.1;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("timer");

setInterval(startTimer, 1000);

var startButton = document.getElementById("start-button");

startButton.addEventListener("click", function () {
  function startTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
      countdownEl.innerHTML = "Time's Up!";
    }
  }
});

//////////////SEPARATOR
// var questions = [
//   {
//     question: "My first question",
//     answers: [
//       { text: "answer 1", correct: false },
//       { text: "answer 2", correct: false },
//       { text: "answer 3", correct: true },
//       { text: "answer 4", correct: false },
//     ],
//   },
//   {
//     question: "My second question",
//     answers: [
//       { text: "answer 1", correct: true },
//       { text: "answer 2", correct: false },
//       { text: "answer 3", correct: false },
//       { text: "answer 4", correct: false },
//     ],
//   },
//   {
//     question: "My third question",
//     answers: [
//       { text: "answer 1", correct: false },
//       { text: "answer 2", correct: false },
//       { text: "answer 3", correct: false },
//       { text: "answer 4", correct: true },
//     ],
//   },
//   {
//     question: "My fourth question",
//     answers: [
//       { text: "answer 1", correct: false },
//       { text: "answer 2", correct: false },
//       { text: "answer 3", correct: true },
//       { text: "answer 4", correct: false },
//     ],
//   }
//   {
//     question: "My fifth question",
//     answers: [
//       { text: "answer 1", correct: false },
//       { text: "answer 2", correct: true },
//       { text: "answer 3", correct: false },
//       { text: "answer 4", correct: false },
//     ],
//   }
// ];

// // don't create it here, make sure it comes from local storage
// const myArray = [];
// if (!myArray) {
//   // set the empty array in local storage
// }

// myArray.push({ scottSterling: 6 });

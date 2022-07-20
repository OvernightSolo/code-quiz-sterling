# Robert (Scott) Sterling: Code Quiz

## Description

This application utilizes HTML, CSS, and Javascript to generate a quiz with multiple choice coding questions.

### Summary with Screengrabs

The opening page shows a intro card with an explanation of the game and timer rationale, as well as a Start button.
![initial page](assets/images/initial.png)

Upon clicking the Start button, the first question appears with four answer options. In each question, the correct answer will appear green, and the three incorrect responses will appear red.
![question display](assets/images/question.png)

If the correct answer is clicked, the background lights up green.
![correct answer](assets/images/answer-correct.png)

If the incorrect answer is clicked, the background lights up red.
![wrong answer](assets/images/answer-wrong.png)

If the user completes the quiz before time runs out, the score is displayed, and the timer is stopped.
![game score](assets/images/user-score.png)

IF the user does not answer all questions before the timer is up, "GAME OVER" appears in the upper right corner.
![game over](assets/images/game-over.png)

If the user chooses, his or her name and score can be manually entered by clicking on High Scores on the main page, which links to a new page. Local storage allows for the name and score to stay on page, even upon reload.
![score page](assets/images/score-page-local-storage.png)

#### File Outline

Two files for each extension type (one for the main page and one for the High Scores page):

- Two HTML files: index2.html and highscores.html
- Two CSS files: style2.css and highscores.css
- Two JavaScript files: script2.js and highscores.js

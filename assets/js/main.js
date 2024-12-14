
/* javascript */
let div = document.querySelector(".score");

// Timer
let timeRemaining = 120;
let timeMax = 120;
let timeMin = 0;

function startTimer() {
    timeRemaining = timeMax;

    const intervalId = setInterval(() => {
        timeRemaining -= 1;

        // Update the timer and score display every second
        updateDisplay();

        if (timeRemaining <= 0) {
            clearInterval(intervalId);
            alert("Time is up! Press next to go to the next game.");
        }
    }, 1000);
}

function restartTimer() {

    timeRemaining = 120;
    ;
}

// Score keeping
let game1 = localStorage.getItem("game1") || 0;
let game2 = localStorage.getItem("game2") || 0;
let game3 = localStorage.getItem("game3") || 0;

var firstButton = document.querySelector(".btn1");
var secondButton = document.querySelector(".btn2");
var thirdButton = document.querySelector(".btn3");



function updateTotalScore() {
        return Number(game1) + Number(game2) + Number(game3);
}


function trackScore() {
    if (game == 1) {
        firstButton.addEventListener("click", () => {
            if (timeRemaining > 1) {
                game1 = 5;
                localStorage.setItem("game1", game1)
                 alert("Good job! Companies can hide vague unsubscribe buttons in the middle of lengthy text. Click next to continue.")
                restartTimer();
            } else {
                alert("Time is up! Click the next button to go to the next game.");
            }
        });
    }
    else if (game == 2) {


        secondButton.addEventListener("click", () => {
            if (timeRemaining > 1) {
                game2 = 5; //  Score 5 for second button
                localStorage.setItem("game2", game2)
                alert("Good job! Sometimes the unscubscribe button is disguised as Preferences. Click next to continue.")
                restartTimer();
            } else {
                alert("Time is up! Click the next button to go to the next game.");
            }
        });
    }
    else if (game == 3) {
        thirdButton.addEventListener("click", () => {
            if (timeRemaining > 1) {
                game3 = 5; // Score 5 for third button
                localStorage.setItem("game3", game3)
                alert("Good job! A company may provide several unsubscribe buttons or prompts, but only one works.")
                restartTimer();
                winOrLose();
            } else if (timeRemaining < 1) {
                alert("Time is up! Click next to see the final screen.");
                winOrLose();
            }
        });
    }
}


function updateDisplay() {
    div.innerHTML = `
    </span class="timeRemaining">Time Remaining: ${timeRemaining}s</span>
    <span class="score">Score: ${updateTotalScore()}</span>
  `;
}

function winOrLose() {
    const totalScore = updateTotalScore();
    if (totalScore === 15) {
        alert("You win! Click next to see the final screen.");
    } else {
        alert("You lose. Click next to see the final screen.");
    }
}

// Start the game
startTimer();
trackScore();

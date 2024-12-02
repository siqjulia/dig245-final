
/* javascript */
let div = document.querySelector(".output");
console.clear();

// Timer
let timeRemaining = 120;
let timeMax = 120;
let timeMin = 0;

function startTimer() {
    timeRemaining = timeMax;
    const timerElement = document.getElementById("timer");

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
let game1 = 0;
let game2 = 0;
let game3 = 0;



var firstButton = document.querySelector("#text-block");
var secondButton = document.querySelector("#button2");
var thirdButton = document.querySelector("#button3");

function updateTotalScore() {
    return game1 + game2 + game3;
}

function trackScore() {
    firstButton.addEventListener("click", () => {
        if (timeRemaining > 1) {
            restartTimer();
        } else {
            // alert("Time is up! Click the next button to go to the next game.");
        }
    });

    secondButton.addEventListener("click", () => {
        if (timeRemaining > 1) {
            game2 = 5; //  Score 5 for second button
            restartTimer();
        } else {
            // alert("Time is up! Click the next button to go to the next game.");
        }
    });

    thirdButton.addEventListener("click", () => {
        if (timeRemaining > 1) {
            game3 = 5; // Score 5 for third button
            restartTimer();
            winOrLose();
        } else if (timeRemaining < 1) {
            // alert("Time is up! Click next to see the final screen.");
            winOrLose();
        }
    });
}

function updateDisplay() {
    div.innerHTML = `
    <h1 class="timeRemaining">Time Remaining: ${timeRemaining}s</h1>
    <p>Score: ${updateTotalScore()}</p>
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

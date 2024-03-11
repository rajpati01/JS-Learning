let scores = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  lose: 0,
  ties: 0,
};

/* if (!scores) {
  scores = {
    wins: 0,
    lose: 0,
    ties: 0,
  };
} */

updateScoreElement();

// function for comparing player and computer move
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  // console.log(computerMove);

  let result = " ";

  if (playerMove === "scissor") {
    if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissor") {
      result = "Tie.";
    } else if (computerMove === "rock") {
      result = "You lose.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissor") {
      result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissor") {
      result = "You win.";
    }
  }

  // updating the score board
  if (result === "You win.") {
    scores.wins += 1;
  } else if (result === "You lose.") {
    scores.lose += 1;
  } else if (result === "Tie.") {
    scores.ties += 1;
  }

  //storing score into localStorage
  localStorage.setItem("score", JSON.stringify(scores));

  //result of the score
  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon" />
    <img src="images/${computerMove}-emoji.png" class="move-icon" />
    Computer`;
}

// function for picking computer move randomly
function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissor";
  }

  return computerMove;
}

// function to reset score
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${scores.wins}, Lose: ${scores.lose}, Ties: ${scores.ties}`;
}

//function to restart a game
function gameReset() {
  scores.wins = 0;
  scores.lose = 0;
  scores.ties = 0;
}

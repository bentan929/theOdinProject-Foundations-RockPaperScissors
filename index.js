// get computer choice to randomly return rock, paper, or scissors
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 100) % 3;

  if (choice === 0)
    return "rock";
  else if (choice === 1)
    return "paper";
  else if (choice === 2)
    return "scissors";
  else
    return "opps";
}

// get user choice
function getHumanChoice() {
  let userChoice = prompt("Rock, Paper, or Scissors?");
  return userChoice.toLowerCase();
}

// declare the players scores
let humanScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", function() {
  playRound("rock", getComputerChoice());
});
paper.addEventListener("click", function() {
  playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", function() {
  playRound("scissors", getComputerChoice());
});

const humanScoreId = document.getElementById("humanScore");
const computerScoreId = document.getElementById("computerScore");
const messageId = document.getElementById("message");

function updateScore() {
  humanScoreId.textContent = humanScore;
  computerScoreId.textContent = computerScore;
}

function announceWinner() {
  if(humanScore === 5)
    messageId.textContent = "You win the game!";
  else if(computerScore === 5)
    messageId.textContent = "Computer wins the game!";
}

function resetGame() {
  alert("Game over...\n Game will be reset!");
  humanScore = 0;
  computerScore = 0;
  updateScore();
  messageId.textContent = "";
}

// main game round
function playRound(humanChoice, computerChoice) {
  let winConditions = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
  };

  if (humanChoice === computerChoice)
    console.log("Tie!");
  else if (winConditions[humanChoice] === computerChoice) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  }
  else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }

  updateScore();
  if (humanScore === 5 || computerScore === 5)
  {
    announceWinner();
    resetGame();
  }
}
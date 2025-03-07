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
}

// helper function to display scores
function displayScore(){
  alert("Your score: " + humanScore + " vs Computer score: " + computerScore);
}

// main game loop
function playGame() {
  let humanChoice, computerChoice;
  
  for (var i = 0; i < 5; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(humanChoice + " " + computerChoice);
    playRound(humanChoice, computerChoice);
    displayScore();
  }
}

playGame();
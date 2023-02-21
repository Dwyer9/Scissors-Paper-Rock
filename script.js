let computerChoice;
let playerChoice;

const getComputerChoice = function () {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    computerChoice = 'rock';
  } else if (random === 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  console.log(computerChoice);
};

const playRound = function (playerSelection) {
  getComputerChoice();
  playerChoice = playerSelection.toLowerCase();
  if (computerChoice === playerChoice) {
    console.log('No result');
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log('Player Wins!');
  } else {
    console.log('Computer Wins!');
  }
};

playRound('rock');

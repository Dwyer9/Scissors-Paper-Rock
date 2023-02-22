let computerChoice;
let playerChoice;
let lastWinner;

const getComputerChoice = function () {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    computerChoice = 'rock';
  } else if (random === 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  // console.log(computerChoice);
};

const playRound = function (playerSelection) {
  getComputerChoice();
  playerChoice = playerSelection.toLowerCase();
  if (computerChoice === playerChoice) {
    // console.log('No result');
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    // console.log('Player Wins!');
    lastWinner = 1;
  } else {
    // console.log('Computer Wins!');
    lastWinner = 2;
  }
};

// playRound('rock');

const game = function () {
  playerScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt('Enter Selection').toLowerCase();
    playRound(playerSelection);
    if (lastWinner === 1) {
      playerScore++;
    } else if (lastWinner === 2) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log('Player Wins!');
  } else {
    console.log('Computer Wins!');
  }
};

game();

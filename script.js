let computerChoice;
let playerChoice;
let lastWinner;
let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const paper = document.querySelector('.paper');
const winnerMessage = document.querySelector('.winnerMessage');
const buttons = document.querySelectorAll('button');
const playerCounter = document.querySelector('.playerCounter');
const computerCounter = document.querySelector('.computerCounter');

const getComputerChoice = function () {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    computerChoice = 'rock';
  } else if (random === 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
};

const playRound = function (playerSelection) {
  console.log(playerSelection);
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
    // lastWinner = 1;
    playerScore++;
    playerCounter.textContent = playerScore;
  } else {
    // console.log('Computer Wins!');
    // lastWinner = 2;
    computerScore++;
    computerCounter.textContent = computerScore;
  }

  if (playerScore === 5) {
    winnerMessage.textContent = 'PLAYER WINS!';
    buttons.forEach((button) => (button.disabled = true));
  }

  if (computerScore === 5) {
    winnerMessage.textContent = 'COMPUTER WINS!';
    buttons.forEach((button) => (button.disabled = true));
  }
};

// playRound('rock');

// const game = function () {
//   playerScore = 0;
//   computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     playerSelection = prompt('Enter Selection').toLowerCase();
//     playRound(playerSelection);
//     if (lastWinner === 1) {
//       playerScore++;
//     } else if (lastWinner === 2) {
//       computerScore++;
//     }
//   }

//   if (playerScore > computerScore) {
//     console.log('Player Wins!');
//   } else {
//     console.log('Computer Wins!');
//   }
// };

// game();

paper.addEventListener('click', (e) => {
  playRound(e.target.className);
});

rock.addEventListener('click', (e) => {
  playRound(e.target.className);
});

scissors.addEventListener('click', (e) => {
  playRound(e.target.className);
});

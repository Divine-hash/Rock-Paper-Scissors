function computerPlay() {
  const arr = ['rock', 'paper', 'scissors'];
  const index = Math.floor(Math.random() * arr.length); // Generates number from 0 to array length - 1
  return arr[index];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let result = 
    playerSelection == computerSelection
      ? 'Tie game'
      : playerSelection == 'rock' && computerSelection == 'scissors'
      ? 'You win, Rock beats scissors'
      : playerSelection == 'paper' && computerSelection == 'rock'
      ? 'You win, Paper beats rock'
      : playerSelection == 'scissors' && computerSelection == 'paper'
      ? 'You win, scissors beats paper'
      : computerSelection == 'rock' && playerSelection == 'scissors'
      ? 'You lose, Rock beats scissors'
      : computerSelection == 'paper' && playerSelection == 'rock'
      ? 'You lose, Paper beats rock'
      : computerSelection == 'scissors' && playerSelection == 'paper'
      ? 'You lose, scissors beats paper' : null; 
  return result;
}

let playerSelection = 'Scissors';
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
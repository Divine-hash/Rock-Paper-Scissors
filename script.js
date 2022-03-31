function computerPlay() {
  const arr = ['rock', 'paper', 'scissors'];
  const index = Math.floor(Math.random() * arr.length); // Generates number from 0 to array length - 1
  return arr[index];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection == 'paper' && playerSelection == 'rock') {
    return 'You lose, Paper beats rock!';
  }

  if (computerSelection == 'rock' && playerSelection == 'scissors') {
    return 'You lose, Rock beats scissors';
  }

  if (computerSelection == 'scissors' && playerSelection == 'paper') {
    return 'You lose, Scissors beats paper';
  }
  
  if (playerSelection == 'paper' && computerSelection == 'rock') {
    return 'You win, Paper beats rock';
  }

  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return 'You win, Rock beats scissors';
  }

  if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return 'You win, Scissors beats paper';
  }

  if (computerSelection == playerSelection) {
    return 'It\'s a tie';
  }
}

let playerSelection = 'Rock';
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
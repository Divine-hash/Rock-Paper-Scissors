function computerPlay() {
  const arr = ['rock', 'paper', 'scissors'];
  const index = Math.floor(Math.random() * arr.length); // Generates number from 0 to array length - 1
  return arr[index];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == 'rock' || playerSelection == 'paper' ||
    playerSelection == 'scissors') {

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

}

function game() {
  let play = confirm('Play Round 1 of 5?');
  let playerPoints = 0;
  let computerPoints = 0;
  let winner;

  if (play) {
    for (let i = 1; i <= 5; i++) {
      let round = i;
      let playerSelection = prompt('Choose Rock, Paper, or Scissors', '');
      let computerSelection = computerPlay();
      winner = playRound(playerSelection, computerSelection); // Returns the winner for a single round else undefined

      //output the winner if winner is not undefined
      if (winner) {
        if (winner.includes('win')) playerPoints += 1
        if (winner.includes('lose')) computerPoints += 1;
        
        console.log(`Round ${i}: ${winner}`);
        if (round == 5) return;
        play = confirm(`Play Round ${++round} of 5`);
        if (!play) {
          finalWinner();
          return;
        };
      } else {
        //decrement i
        --i;
      }
    }

    function finalWinner() {
      if (playerPoints > computerPoints) {
        console.log(`Your Score: ${playerPoints} 
        Computer Score ${computerPoints}`);
        console.log('You Win');
        return;
      }
      
      if (playerPoints < computePoints) {
        console.log(`Your Score: ${playerPoints} Computer Score ${computerPoints}`);
        console.log('You loose');
        return;
      }

      
      console.log(`Your Score: ${playerPoints} 
      Computer Score ${computerPoints}`);
      console.log('Tie game');
    }
    
  }
}



game();
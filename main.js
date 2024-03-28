// Step 1 - getComputerChoice

// Function with a array to get computer answer
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex];
}
// Step 2

function singleRound(playerSelection, computerSelection) {
  // Convert playerSelection to lowercase aka not case sensitive
  playerSelection = playerSelection.toLowerCase()

  // Rock outcomes
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `${playerSelection} beats ${computerSelection}, you win!`
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      return `${playerSelection} doesn't beat ${computerSelection}, you lose!`
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return `${playerSelection} is equal to ${computerSelection}, it's a draw!`
      }
  // Scissors Outcomes
      else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return `${playerSelection} doesn't beat ${computerSelection}, you lose!`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      return `${playerSelection} beats ${computerSelection}, you win!`
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return `${playerSelection} is equal to ${computerSelection}, it's a draw!`
      }
  // Paper Outcome
      else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `${playerSelection} beats ${computerSelection}, you win!`
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      return `${playerSelection} doesn't beat ${computerSelection}, you lose!`
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return `${playerSelection} is equal to ${computerSelection}, it's a draw!`
      } else {
        return `Please enter a valid input`
      }
    };
    

// Step 3 - Into a for loop to repeat 5 times
  
function playGame() {
  // End at 4 due to i beginning with 0
  for (i = 0; i <= 4; i++) {

  const playerSelection = prompt('Rock, Paper or Scissors?')
  const computerSelection = getComputerChoice()
  const roundResult = singleRound(playerSelection, computerSelection)
  console.log(roundResult);
  }
};

playGame();
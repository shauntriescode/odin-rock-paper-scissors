// Reset on page load
let playerSelection = null;
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


// // Step 3 - Into a for loop to repeat 5 times
  
function playGame() {
  if (playerSelection !== null) {
  const computerSelection = getComputerChoice()
  const roundResult = singleRound(playerSelection, computerSelection)
  updateResult(roundResult);
  score(roundResult);
}};

playGame();


// Event Listeners

// Rock
const rock = document.querySelector('#rock')

rock.addEventListener('click', function() {
  playerSelection = 'rock'
  playGame()
});

// Paper
const paper = document.querySelector('#paper');

paper.addEventListener('click', function() {
  playerSelection = 'paper'
  playGame()
});

// Scissors
const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', function() {
  playerSelection = 'scissors'
  playGame()
});

// Result

result = document.querySelector('#result');

function updateResult(roundResult) {
  result.textContent = `${roundResult} player score: ${playerScore}, computer score: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    endGame()
  }
};

// Score

let playerScore = 0;
let computerScore = 0;

function score(roundResult) {
  if (roundResult.includes('win')) {
    playerScore++
  } else if (roundResult.includes('lose')) {
    computerScore++
  } else {
    return 'draw'
  }
};

// End game and reset to 0

function endGame() {
  if (playerScore === 5) {
    alert('congratulations, you win!')
    playerScore = 0;
    computerScore = 0;
  } else {
    alert('game over! better luck next time');
    playerScore = 0;
    computerScore = 0;
  } 
};





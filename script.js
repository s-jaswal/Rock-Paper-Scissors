// onclick user name button start //
function userInput() {
    var name = prompt("Please enter your name:");
    if (name !== null) {
        document.getElementById("response-text").innerText = "Hello, " + name + "!";
    }
}
// Let or const is recommended for variable declaration
const game = () => {
let playerScore = 0;
let computerScore = 0;
let moves= 0;
}

// script.js
const playGame = () => {
  const rockBtn = document.querySelector('.rock');
  const paperBtn = document.querySelector('.paper');
  const scissorBtn = document.querySelector('.scissor');
  const playerOptions = [rockBtn, paperBtn, scissorBtn];
  const computerOptions = ['rock', 'paper', 'scissors']
}

function computerSelection() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  // Add logic to determine winner based on playerSelection and computerSelection
  // Update the results element to display the winner
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerSelection = button.textContent.toLowerCase(); // Get button text content and convert to lowercase
    const computerChoice = computerSelection();
    playRound(playerSelection, computerChoice);
  });
});

// gives the results for what will happen every 5 rounds
// Inside your script.js file
function game(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      results.textContent = "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      playerScore++; 
      results.textContent = "You win! " + playerSelection + " beats " + computerSelection;
    } else {
      computerScore++;
      results.textContent = "Computer wins! " + computerSelection + " beats " + playerSelection;
    }
  }

  // Helper function to update computer score and display success message
function updateComputerScore(computerSelection, playerSelection) {
    computerScore++; // Update computer score
    results.innerHTML = "The computer wins! " + computerSelection + " beats " + playerSelection; // success message


  }
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    updateComputerScore(computerSelection, playerSelection);
  }

  // Inside your script.js file
// storing the user selection as a function
function throwRock() {
    playerChoice = "rock";
    computerChoice = computerSelection();
    playGame(playerChoice, computerChoice);
  }
  
  function throwPaper() {
    playerChoice = "paper";
    computerChoice = computerSelection();
    playGame(playerChoice, computerChoice);
  }
  
  function throwScissors() {
    playerChoice = "scissors";
    computerChoice = computerSelection();
    playGame(playerChoice, computerChoice);
  }
  
  // the game is over 
const gameOver = (playerOptions, movesLeft) => {
 
  const chooseMove = document.querySelector('.move');
  const result = document.querySelector('.result');
  const reloadBtn = document.querySelector('.reload');

  playerOptions.forEach(option => {
      option.style.display = 'none';
  })


  chooseMove.innerText = 'Game Over!!'
  movesLeft.style.display = 'none';

  if (playerScore > computerScore) {
      result.style.fontSize = '2rem';
      result.innerText = 'You Won The Game'
      result.style.color = '#308D46';
  }
  else if (playerScore < computerScore) {
      result.style.fontSize = '2rem';
      result.innerText = 'You Lost The Game';
      result.style.color = 'red';
  }
  else {
      result.style.fontSize = '2rem';
      result.innerText = 'Tie';
      result.style.color = 'grey'
  }
  reloadBtn.innerText = 'Restart';
  reloadBtn.style.display = 'flex'
  reloadBtn.addEventListener('click', () => {
      window.location.reload();
  })
}
console.log()

// onclick user name button start //
function userInput() {
    var name = prompt("Please enter your name:");
    if (name !== null) {
        document.getElementById("response-text").innerText = "Hello, " + name + "!";
    }
}
// script.js

// Let or const is recommended for variable declaration
let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerChoice;

// script.js
const buttons = document.querySelectorAll('.btn');
const results = document.getElementById('results');

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
    results.innerHTML = "The computer wins! " + computerSelection + " beats " + playerSelection; // Display success message
  }
  
  // Inside your game() function (assuming you have one):
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
  
  // reset the scores at the end of every round 
function resetScores() {
    // Reset player and computer scores
    playerScore = 0;
    computerScore = 0;
  
    // Update HTML element to display "0" for both scores (assuming you have elements with IDs "player-score" and "computer-score"):
    document.getElementById("player-score").textContent = 0;
    document.getElementById("computer-score").textContent = 0;
  }
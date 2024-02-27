console.log()

// onclick user name button start //
function userInput() {
    var name = prompt("Please enter your name:");
    if (name !== null) {
        document.getElementById("response-text").innerText = "Hello, " + name + "!";
    }
}
// onclick user name button end // 

let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerChoice;

// Add event listeners to buttons here
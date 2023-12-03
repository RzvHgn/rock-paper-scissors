//score tracking
let playerScore = 0;
let computerScore = 0;

// Function to prompt the player for a valid choice
function playerChoice() {
    let choice;
    do {
        choice = prompt("Let's play rock, paper, or scissors! Pick your hand:").toLowerCase();
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");

    return choice;
}

// Function to generate a random choice for the computer
function computerChoice() {
    let compChoice = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * compChoice.length);
    return compChoice[randomChoice];
}

// Function to determine the winner
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        return "You Win!";
    } else {
        computerScore++;
        return "You Lose!";
    }
}

function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        // Get player choice
        let player = playerChoice();

        // Get computer choice
        let computer = computerChoice();

        // Display the player's choice
        console.log("Player's choice:", player);

        // Display the result and update scores
        console.log(playRound(player, computer));
        console.log("Player Score:", playerScore, "Computer Score:", computerScore);
    }
    console.log("Final Scores - Player:", playerScore, "Computer:", computerScore);

    // Reset scores for a new game
    playerScore = 0;
    computerScore = 0;
}

// Get player and computer choices
let player = playerChoice();
let computer = computerChoice();


// Display the result
playGame(5);
console.log(playerScore);
console.log(computerScore);
console.log(player);
console.log(computer);
console.log(playRound(player, computer));
console.log("Hello! Let's play.");
let roundsMax = 5;
let rounds = 1;
let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;

while(rounds <= roundsMax) {
    playGame();
} 

if(humanScore == computerScore) {
    console.log("Game over!\nFinal Score " + humanScore + " : " + computerScore + "\nIt's a tie!");
}
if(humanScore > computerScore) {
    console.log("Game over!\nFinal Score " + humanScore + " : " + computerScore + "\nYOU WIN!");
}
if(humanScore < computerScore) {
    console.log("Game over!\nFinal Score " + humanScore + " : " + computerScore + "\nYou lose...");
}



function playGame() {
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);

    console.log("Round: " + rounds);
    console.log("Your choice: " + humanSelection);
    console.log("Their choice: " + computerSelection);
    rounds++;
}



function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        alert("It's a draw.")
    }

    if(humanChoice == "rock") {
        if(computerChoice == "scissors") {
            alert("You won this round!");
            humanScore++;
        }
        if(computerChoice == "paper") {
            alert("You lost this round...");
            computerScore++;
        }
    }
    if(humanChoice == "paper") {
        if(computerChoice == "rock") {
            alert("You won this round!");
            humanScore++;
        }
        if(computerChoice == "scissors") {
            alert("You lost this round...");
            computerScore++;
        }
    }
    if(humanChoice == "scissors") {
        if(computerChoice == "paper") {
            alert("You won this round!");
            humanScore++;
        }
        if(computerChoice == "rock") {
            alert("You lost this round...");
            computerScore++;
        }
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);

    if(choice == 0) {
        return "rock";
    }
    if(choice == 1) {
        return "paper";
    }
    if(choice == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice; 

    while(true) {
        humanChoice = prompt("rock, paper, or scissors?");
        if(humanChoice == "rock") {
            return humanChoice
        }
        if(humanChoice == "paper") {
            return humanChoice
        }
        if(humanChoice == "scissors") {
            return humanChoice
        } else {
            alert("Invalid choice (Choices are case sensitive)")
        }
    }
}
const playBtn = document.querySelector("#play");
const playText = document.querySelector("#play-text");
const btnDiv = document.querySelector("#buttons");
const scoreText = document.querySelector("#score-text");

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock"
const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper"
const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors"

let roundsMax = 5;
let rounds = 1;
let humanScore = 0;
let computerScore = 0;
let humanSelection = "";
let computerSelection;


playBtn.addEventListener("click", () => {
    btnDiv.removeChild(playBtn)

    btnDiv.appendChild(rockBtn);
    btnDiv.appendChild(paperBtn);
    btnDiv.appendChild(scissorsBtn);
    //while(rounds <= roundsMax) { playGame(); }
    chooseText();
})

rockBtn.addEventListener("click", () => {
    humanSelection = "rock";
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})

paperBtn.addEventListener("click", () => {
    humanSelection = "paper";
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})

scissorsBtn.addEventListener("click", () => {
    humanSelection = "scissors";
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})


function checkGameScore(humanScore, computerScore) {
    if(humanScore == computerScore) {
        console.log("Game over!\nFinal Score " + humanScore + " : " + computerScore + "\nIt's a tie!");
    }
    if(humanScore > computerScore) {
        console.log("Game over!\nFinal Score " + humanScore + " : " + computerScore + "\nYOU WIN!");
    }
    if(humanScore < computerScore) {
        console.log("Game over!\nFinal Score " + humanScore + " : " + computerScore + "\nYou lose...");
    }
}



function playGame() {
    computerSelection = getComputerChoice();
    //humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);

    console.log("Round: " + rounds);
    console.log("Your choice: " + humanSelection);
    console.log("Their choice: " + computerSelection);
    rounds++;
}



function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        playText.textContent = "It's a draw.";
        rounds++;
    }

    if(humanChoice == "rock") {
        if(computerChoice == "scissors") {
            playText.textContent = "You won this round!";
            humanScore++;
            rounds++; 
        }
        if(computerChoice == "paper") {
            playText.textContent = "You lost this round...";
            computerScore++;
            rounds++; 
        }
    }
    if(humanChoice == "paper") {
        if(computerChoice == "rock") {
            playText.textContent = "You won this round!";
            humanScore++;
            rounds++; 
        }
        if(computerChoice == "scissors") {
            playText.textContent = "You lost this round...";
            computerScore++;
            rounds++; 
        }
    }
    if(humanChoice == "scissors") {
        if(computerChoice == "paper") {
            playText.textContent = "You won this round!";
            humanScore++;
            rounds++; 
        }
        if(computerChoice == "rock") {
            playText.textContent = "You lost this round...";
            computerScore++;
            rounds++; 
        }
    }

    scoreText.textContent = "Round: " + rounds + 
    "\nScore: You = " + humanScore + " Computer: " + computerScore; 

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


function chooseText() {
    humanSelection = "";
    playText.textContent = "Choose one!";
}
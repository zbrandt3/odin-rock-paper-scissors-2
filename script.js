const playBtn = document.querySelector("#play");
const playText = document.querySelector("#play-text");
const btnDiv = document.querySelector("#buttons");
const scoreText = document.querySelector("#score-text");
const compChoiceText = document.querySelector("#computer-choice");

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
    btnDiv.removeChild(rockBtn);
    btnDiv.removeChild(paperBtn);
    btnDiv.removeChild(scissorsBtn);

    if(humanScore == computerScore) {
        playText.textContent = "Game over!";
        scoreText.textContent = "Final Score " + humanScore + " : " + computerScore + "\nIt's a tie!";
    }
    if(humanScore > computerScore) {
        playText.textContent  = "Game over!";
        scoreText.textContent = "Final Score " + humanScore + " : " + computerScore + "\nYOU WIN!";
    }
    if(humanScore < computerScore) {
        playText.textContent = "Game over!";
        scoreText.textContent = "Final Score " + humanScore + " : " + computerScore + "\nYou lose...";
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        compChoiceText.textContent = "They chose: " + computerChoice;
        playText.textContent = "It's a draw.";
        rounds++;
    }

    if(humanChoice == "rock") {
        if(computerChoice == "scissors") {
            compChoiceText.textContent = "They chose: " + computerChoice;
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
            compChoiceText.textContent = "They chose: " + computerChoice;
            playText.textContent = "You won this round!";
            humanScore++;
            rounds++; 
        }
        if(computerChoice == "scissors") {
            compChoiceText.textContent = "They chose: " + computerChoice;
            playText.textContent = "You lost this round...";
            computerScore++;
            rounds++; 
        }
    }
    if(humanChoice == "scissors") {
        if(computerChoice == "paper") {
            compChoiceText.textContent = "They chose: " + computerChoice;
            playText.textContent = "You won this round!";
            humanScore++;
            rounds++; 
        }
        if(computerChoice == "rock") {
            compChoiceText.textContent = "They chose: " + computerChoice;
            playText.textContent = "You lost this round...";
            computerScore++;
            rounds++; 
        }
    }

    scoreText.textContent =  "\nScore: You = " + humanScore +
     " Computer: " + computerScore; 

     if(rounds > 5) {
        checkGameScore(humanScore, computerScore);
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


function chooseText() {
    humanSelection = "";
    playText.textContent = "Choose one!";
}
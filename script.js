console.log("Hello! Let's play.");
console.log(getComputerChoice());

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
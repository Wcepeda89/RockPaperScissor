const choiceOptions = ["Rock", "Paper", "Scissor"];

// Getting computers choice
function computerPlay() {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == "0") {
        return "paper";
    }
    else if (computerChoice == "1") {
        return "rock";
    }
    else {
        return "scissors";
    }
}
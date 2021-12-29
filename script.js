

// Computer chooses random String from 'options' and returns it
function computerPlay () {
    const options = ["rock", "paper", "scissors"];
    const randomOption = options[Math.floor(Math.random()*options.length)];
    return randomOption;
}

// Eingabe der Player option & konvertierung zu lowerCase
function playerPlay () {
    return prompt("Choose Rock, Paper, or Scissors").toLowerCase();
}

let playerSelection = playerPlay();
let computerSelection = computerPlay();

// eine Runde des Spiels, und Siegesanzeige

function playRound (playerSelection, computerSelection) {
    // Falls Gleichstand herrscht
    if (playerSelection === computerSelection) {
        return "Tie! Play Again";
    }
    // P: Rock , C: Scissors
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return `You win! Rock beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    }
    // P: Rock , C: Paper
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats Rock!`;
    }
    // P: Scissors , C: Rock
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats Scissors!`;
    }
    // P: Scissors , C: Paper
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return `You win! Scissors beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
        return playerScore += 1;
    }
    // P: Paper , C: Rock
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return `You win! Paper beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    }
    // P: Paper , C: Scissors
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats Paper!`;
    }
}

// Scoreboard
let playerScore = 0;
let computerScore = 0;

function showScore (playerSelection, computerSelection) {

    // Falls Gleichstand herrscht
    if (playerSelection === computerSelection) {
        return `You: ${playerScore} / Computer: ${computerScore}`;
    }
    // P: Rock , C: Scissors
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return `You: ${++playerScore} / Computer: ${computerScore}`;
    }
    // P: Rock , C: Paper
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return `You: ${playerScore} / Computer: ${++computerScore}`;
    }
    // P: Scissors , C: Rock
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return `You: ${playerScore} / Computer: ${++computerScore}`;
    }
    // P: Scissors , C: Paper
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return `You: ${++playerScore} / Computer: ${computerScore}`;
    }
    // P: Paper , C: Rock
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return `You: ${++playerScore} / Computer: ${computerScore}`;
    }
    // P: Paper , C: Scissors
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return `You: ${playerScore} / Computer: ${++computerScore}`;
    }
}


function game(){
    while ((playerScore && computerScore) < 5){
        
        if ((playerScore || computerScore ) === 5){
            break;
        }

        else{
        console.log(playRound(playerSelection, computerSelection));
        console.log(showScore(playerSelection, computerSelection));
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        }
    }

    if (playerScore == 5){
        alert("You won the game!")
    }
    else if (computerScore == 5){
        alert("You lost the game")
    }
}

console.log(game());

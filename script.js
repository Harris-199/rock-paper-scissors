function getComputerChoice() {
    const ran = Math.random();
    if (0 <= ran && ran < 1/3) return "Rock";
    if (1/3 <= ran && ran < 2/3) return "Paper";
    if (2/3 <= ran && ran < 1) return "Scissors";
}

function enumerate(choice) {
    choice = choice.toLowerCase();
    switch(choice) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return playRound(playerSelection, getComputerChoice());
    }

    const playerChoice = enumerate(playerSelection);
    const computerChoice = enumerate(computerSelection);
    const difference = playerChoice - computerChoice;

    switch(difference) {
        case 1:
            console.log(`You won this round! ${playerSelection} beats ${computerSelection}.`)
            return 1;
        case -1:
            console.log(`You lost this round! ${computerSelection} beats ${playerSelection}.`);
            return 0;
        case 2:
            console.log(`You lost this round! ${computerSelection} beats ${playerSelection}.`);
            return 0;
        case -2:
            console.log(`You won this round! ${playerSelection} beats ${computerSelection}.`);
            return 1;
    }
}

function game() {
    const ROUNDS = 5;
    playerWins = 0;
    computerWins = 0;

    for (let i = 0; i < ROUNDS; i++) {
        playerSelection = prompt("Rock, Paper, or Scissors?");
        computerSelection = getComputerChoice();

        const playerWon = playRound(playerSelection, computerSelection);

        if (playerWon) playerWins++;
        else computerWins++;

        if (playerWins === 3) {
            console.log("You won the game!")
            break;
        }
        if (computerWins === 3) {
            console.log("You lost the game!")
            break;
        }
    }
}
game();
const getComputerChoice = () => {
    let choice;
    choice = Math.floor(Math.random() * 3) + 1;
    switch(choice) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
} 

const play = (playerSelection, computerSelection) => {
    console.log(playerSelection, computerSelection);
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You Win! Scissors beats Paper";
    } else {
        return "Same, reload";
    }
}

const game = (choice) => {
    for (let i = 0; i < 5; i++) {
        console.log(play(choice, getComputerChoice()));
    }
}

let choice = "Rock";
choice = choice.toLowerCase();

game(choice);



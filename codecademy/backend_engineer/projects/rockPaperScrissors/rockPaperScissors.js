
// bomb is the secret cheat code, User always Wins!

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    return userInput;
}



const getComputerChoice = () => {
    // Generate a random whole number between 0 and 2, including both 0 and 2. 
    num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
        default: return '';
            break;
    }
}


const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') return "The User Wins with a secret code !!"

    if (userChoice === computerChoice) {
        return "The Game is a Tie!";
    } else {
        if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return "The Computer Won!";
            } else {
                return "The User Won!";
            }
        }
        if (userChoice === 'paper') {
            if (computerChoice === 'rock') {
                return "The User Won!";
            } else {
                return "The Computer Won!";
            }
        }
        if (userChoice === 'scissors') {
            if (computerChoice === 'paper') {
                return "The User Won!";
            } else {
                return "The Computer Won!";
            }
        }
    }
    if (userChoice != ('rock' || 'scissors' || 'paper')) return 'Invalid User Input!';
}

const playgame = () => {
    let userChoice = getUserChoice('icecream');
    let computerChoice = getComputerChoice();

    if (userChoice !== 'bomb') {
        console.log('User Choice is : ' + userChoice);
    }

    console.log('Computer Choice is : ' + computerChoice);

    if (determineWinner(userChoice, computerChoice) != 'Invalid User Input!') {
        console.log(determineWinner(userChoice, computerChoice));
    } else {
        console.log("To play the game, enter either rock, paper or scissors.");
    }
}

playgame();
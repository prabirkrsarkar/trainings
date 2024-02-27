let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (user_guess, comp_guess, secret_number) => {

    if (user_guess >= 0 && user_guess <= 9) {

        let user_diff = Math.abs(secret_number - user_guess);
        let comp_diff = Math.abs(secret_number - comp_guess);

        if ((user_diff === comp_diff) || (user_diff > comp_diff)) return true;
        else return false;
    }else console.log('Your number should be between 0 and 9');
}

const updateScore = winner => {

    if (winner === 'human') {
        humanScore += 1;
    } else if (winner == 'computer') {
        computerScore += 1;
    }
}


const advanceRound = () => currentRoundNumber += 1;

// Testing
console.log(compareGuesses(8, 7, generateTarget()));


let computerPlay = function() {
    let randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper'
        case 2:
            return 'scissors';
        default:
            return 'invalid'
    }
}

function playRound (playerSelection, computerSelection) {
    console.log('Player: ' + playerSelection + ' Computer:' + computerSelection);
    if (playerSelection === computerSelection) {
        return 'It\'s a draw!';
    } else if (playerSelection === 'rock') {
        return (computerSelection === 'scissors') ? 'You won!' : 'You lose!'; 
    } else if (playerSelection === 'paper') {
        return (computerSelection === 'rock') ? 'You won!' : 'You lose!'; 
    } else if (playerSelection === 'scissors') {
        return (computerSelection === 'paper') ? 'You won!' : 'You lose!'; 
    } else {
        return 'Oops! Invalid bet!'
    }     
}


function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i ++) {
        const playerSelection = prompt('You bet?','Rock, Paper or Scissors?').toLowerCase();
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        
        console.log(result);
        if (result !== 'Oops! Invalid bet!') {
            (result === 'You won!') ? playerScore++ : computerScore++;
        }
        console.log(`Player: ${playerScore}; Computer: ${computerScore}`);
    }

    if (playerScore !== computerScore) {
        (playerScore > computerScore) ? console.log('YEY YOU WON THE GAME!') : 
        console.log('BETTER LUCK NEXT TIME!');
    } else {
        console.log('IT\'S A DRAW!');
    }
    
}

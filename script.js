const selection = document.querySelectorAll('.options');
const picksBoard = document.querySelector('#picks-container')
const resultBoard = document.querySelector('#results-container');
const roundResultDisplay = document.querySelector('#round-result');
const resetButton = document.querySelector('button');
resetButton.style.visibility = 'hidden';


let computerScore = 0;
let playerScore = 0;

let computerPlay = function() {
    let randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors';
        default:
            return 'Invalid';
    }
}

selection.forEach((pick) => {
    pick.addEventListener('click', playerPlay);
});

function playerPlay(e) {
   playerSelection = e.target.getAttribute('data-name');  
   let computerSelection = computerPlay();
   if(playerSelection) {
        if (computerScore !==5 && playerScore !==5) {
            playRound(playerSelection, computerSelection);
        } else {
            picksBoard.textContent = 'Game Over!';
            displayWinner();
            askNewGame();
        }
   }
}

function playRound(playerSelection, computerSelection) {
    displayRoundPicks (playerSelection, computerSelection);

    if (playerSelection === computerSelection) {
        roundWinner('draw', playerSelection, computerSelection);
    } else if (playerSelection === 'Rock') {
            (computerSelection === 'Scissors') ? roundWinner('player', playerSelection, computerSelection) :
                roundWinner('computer', playerSelection, computerSelection); 
    } else if (playerSelection === 'Paper') {
            (computerSelection === 'Rock') ? roundWinner('player', playerSelection, computerSelection) :
                roundWinner('computer', playerSelection, computerSelection);  
    } else if (playerSelection === 'Scissors') {
            (computerSelection === 'Paper') ? roundWinner('player', playerSelection, computerSelection) :  
                roundWinner('computer', playerSelection, computerSelection); 
    }
}

function roundWinner(roundResult, playerSelection, computerSelection){
    console.log('im here!');
    if (roundResult === 'player') {
        playerScore++;
        roundResultDisplay.textContent = `You Won! ${playerSelection} wins over ${computerSelection}!`;
    } else if (roundResult === 'computer') {
        computerScore++;
        roundResultDisplay.textContent = `You Lose! ${computerSelection} wins over ${playerSelection}!`;
    } else if (roundResult === 'draw'){
        roundResultDisplay.textContent = `It's a draw!`;
    }

    resultBoard.appendChild(roundResultDisplay);
    displayCurrentScore(playerScore, computerScore);

}

function displayRoundPicks (playerSelection, computerSelection) { 
    picksBoard.style.cssText = 'border: 2px solid pink; background-color: pink; text-align: center; align-self: center; white-space:pre;';
    picksBoard.textContent = `Player: ${playerSelection} Computer: ${computerSelection}`;                         

}

function displayCurrentScore(playerScore, computerScore) {
   picksBoard.textContent += `\r\n Player Score: ${playerScore} Computer Score: ${computerScore}`;
}

function displayWinner(playerScore, computerScore){
    resultBoard.style.visibility = 'visible';
    resultBoard.style.cssText = 'font-weight: bold; padding-top: 10px';
    (playerScore > computerScore) ? resultBoard.textContent = 'You won!' : resultBoard.textContent = 'You lose!';
}   


function askNewGame(){
    resetButton.style.visibility = 'visible';
    resetButton.addEventListener('click', resetGame);
}

function resetGame(e){
    computerScore = 0;
    playerScore = 0;
    resetButton.style.visibility = 'hidden';
    picksBoard.style.visibility = 'hidden';
    resultBoard.style.visibility = 'hidden';
}



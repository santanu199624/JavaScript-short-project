let randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessFiled');

const prevGuesses = document.querySelector('.guesses');

const guessRem = document.querySelector('.lastResult');

const loworHigh = document.querySelector('.loworHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];

let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }else if(guess < 1){
        alert("Please enter a valid number")
    }else if(guess > 100){
        alert("Please enter a valid number")
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Number is too low`);
    }else if(guess > randomNumber){
        displayMessage(`Number is too big`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    prevGuesses.innerHTML += `${guess} `;
    numGuess++;
    guessRem.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    loworHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
   const newGameButton = document.querySelector('#newGame');
   newGameButton.addEventListener('click', (e) =>{
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    prevGuesses.innerHTML = '';
    guessRem.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
   });
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame()
}


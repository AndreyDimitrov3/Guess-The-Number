// Generate The Random Number
let randomInt = generateRandomNumber();
console.log(randomInt); // Cheat Code

// Declare Variables
const input = document.getElementById('input');
const checkButton = document.getElementById('check');
const newGameButton = document.getElementById('newGame');
let attempts = 0;

// Utility function to generate a random number between 1 and 99
function generateRandomNumber() {
    return Math.floor(Math.random() * 99) + 1;
}

// Hide All Hint Messages
function hideHints() {
    document.querySelectorAll('.hint').forEach(el => el.style.display = 'none');
}

checkButton.addEventListener('click', function(){
    hideHints();
    attempts++
    document.getElementById('attempts').innerText = attempts;

    const userGuess = Number(input.value);
    if(randomInt === userGuess){
        document.getElementById('correct').style.display = 'block';
        newGameButton.style.display = 'block';
        attempts = 0;
        checkButton.disabled = true;
    } else if (randomInt < userGuess){
        document.getElementById('lower').style.display = 'block';
    } else if (randomInt > userGuess){
        document.getElementById('higher').style.display = 'block';
    }

    input.value = '';
})

// Event Listener For The New Game
newGameButton.addEventListener('click', function(){
    randomInt = generateRandomNumber(); // Get a new random number
    console.log(randomInt);
    
    checkButton.disabled = false;
    attempts = 0;
    document.getElementById('attempts').innerText = attempts;
    hideHints()
    newGameButton.style.display = 'none';
    document.getElementById('guess').style.display = 'block';
});

function maxLength(){
    if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
}

function isNumberKey(evt) {
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
}

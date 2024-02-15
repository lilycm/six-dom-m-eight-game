
// function play(){
// step -1: hide the home screen and to hide the screen add the class "hidden" to the home section

// const homeSection = document.getElementById('home');

// homeSection.classList.add('hidden');
// console.log(homeSection.classList);


//show the play ground
// const playGroundSection = document.getElementById('play-ground');
// playGroundSection.classList.remove('hidden');

// }

function handleplayerboardplayerUpEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    //stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    //check matched or not

    if (playerPressed === expectedAlphabet) {
        console.log('You are win!!!');
        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore);
        const newScore = currentScore + 1;

        setTextElementValueById('current-score', newScore);


        //update score
        //1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        //2. increase the score by 1
        // const newScore = currentScore + 1;

        //3. show the current score
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);
        console.log('Oopps!!! You missed a life', updatedLife);


        if (updatedLife === 0) {
            gameOver();
        }





        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const lostLife = currentLife - 1;
        // currentLifeElement.innerText = lostLife;

    }

}

document.addEventListener('keyup', handleplayerboardplayerUpEvent)

function continueGame() {
    //step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);


    //set random generated alphabet to the screen (show it);
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;


    //set background color
    setBackgroundColorById(alphabet);


}


function play() {

    //hide everything only show the playground
    hideElementById('home');
    hideElementById('score');
    showElementById('play-ground');


    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('score');


    //update final score
    //1. get the final score

    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);


    //clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);

}


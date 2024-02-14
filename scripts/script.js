
// function play(){
    // step -1: hide the home screen and to hide the screen add the class "hidden" to the home section

    // const homeSection = document.getElementById('home');

    // homeSection.classList.add('hidden');
    // console.log(homeSection.classList);


    //show the play ground
    // const playGroundSection = document.getElementById('play-ground');
    // playGroundSection.classList.remove('hidden');

// }

function continueGame(){
    //step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log(alphabet);


    //set random generated alphabet to the screen (show it);
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;


    //set background color
    setBackgroundColorById(alphabet);


}


function play(){
    hideElementById('home');
    showElementById('play-ground');
    continueGame()
}


function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-amber-500');
}


// function getARandomAlphabet(){
//     //get or create a alphabet array
//     const alphabetString = 'abcdefghijklmnoqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     console.log(alphabets)


//     //get a random alphaber between 0 -25
//     const randomNumber = Math.random()*25;
//     const index = Math.round(randomNumber);



//     const alphabet = alphabets[index];
//     console.log(index, alphabet);
//     return alphabet;
// }


function getARandomAlphabet() {


    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets);


    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);


    const alphabet = alphabets[index];
    return alphabet;
}
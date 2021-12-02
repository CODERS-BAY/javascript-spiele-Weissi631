let randomNumber;
let userNumber;
let guesses; 

function setNumber() {
    let input = parseInt(document.getElementById('difficulty').value);
    randomNumber = Math.floor(Math.random() * input);
    guesses = parseInt(document.getElementById('counterInput').value);
}

function compareNumbers() {
    userNumber = parseInt(document.getElementById('playerInput').value);

    if(guesses > 0) {
        guesses--;
        if(userNumber < randomNumber) {
            feedback.setAttribute('src', '../images/game3/up.png')
        } else if(userNumber > randomNumber) {
            feedback.setAttribute('src', '../images/game3/down.png')
        } else if (userNumber == randomNumber) {
            createPopup('Du hast es geschafft!!', true);
        }
    } else {
        createPopup('Leider hast du alle Versuche schon verbraucht!', true);
    }
}
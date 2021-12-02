console.log('common_commands connected')

function nextScreen(infoFromButton) {
    let currentScreen = infoFromButton.parentElement.parentElement;
    currentScreen.classList.remove('active');
    currentScreen.nextElementSibling.classList.add('active');

}

function previousScreen(infoFromButton) {
        let currentScreen = infoFromButton.parentElement.parentElement;
        currentScreen.classList.remove('active');
        currentScreen.previousElementSibling.classList.add('active');    
}

function giveUp() {
    createPopup('Schade, dass du aufhören möchtest!', true);
}
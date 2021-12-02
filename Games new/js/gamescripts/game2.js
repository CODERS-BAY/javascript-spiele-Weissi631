let tries;


function readTryCount() {
    tries = tryCount.value;
    console.log("Try Count = " + tries);

    if(tries <= 0) {
        createPopup('Bist du dumm?');
    } 
    else {
        let activeDiv = document.getElementsByClassName('active')[0];
        activeDiv.classList.remove('active');
        activeDiv.nextElementSibling.classList.add('active');
    }
}

function play(userChoice) {

    let comChoice = Math.ceil(Math.random() * 3);
    let userPoint = parseInt(document.getElementById('userPoints').innerText);
    let comPoint = parseInt(document.getElementById('comPoints').innerText);


    playerImage.setAttribute('src', '../images/game2/option' + userChoice + '.png');
    comImage.setAttribute('src', '../images/game2/option' + comChoice + '.png' );

    if(userChoice == comChoice) {
        userPoint++;
        document.getElementById('userPoints').innerText = userPoint;
    }
    else {
        comPoint++;
        document.getElementById('comPoints').innerText = comPoint;
    }

    tries--;
    if(tries==0) {
        setTimeout(function() {
            if(userPoint > comPoint) {
                createPopup('Du hast gewonnen', true);
            }
            else if (userPoint == comPoint) {
                createPopup('Unentschieden', true);
            }
            else {
                createPopup('Leider verloren', true);
            }
        }, 300)
    }
}
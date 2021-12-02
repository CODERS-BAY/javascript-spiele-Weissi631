let fallingSpeed;
let counter;
let distanceToMonster;
    distanceToMonster = Math.random() * 90 + 10;
    distanceToMonster = Math.round(distanceToMonster);


function setValueForPlanet(fallingSpeedInput) {
    fallingSpeed = fallingSpeedInput;
    let activePlanet1 = document.getElementsByClassName('level')[0];
    let activePlanet2 = document.getElementsByClassName('level')[1];
    let activePlanet3 = document.getElementsByClassName('level')[2];
    let activePlanet4 = document.getElementsByClassName('level')[3];
    
    if(fallingSpeed == 9.81) {
        activePlanet1.classList.add('selected');
        activePlanet2.classList.remove('selected');
        activePlanet3.classList.remove('selected');
        activePlanet4.classList.remove('selected');
    }
    else if(fallingSpeed == 24.79) {
        activePlanet1.classList.remove('selected');
        activePlanet2.classList.add('selected');
        activePlanet3.classList.remove('selected');
        activePlanet4.classList.remove('selected');
    }
    else if(fallingSpeed == 3.69) {
        activePlanet1.classList.remove('selected');
        activePlanet2.classList.remove('selected');
        activePlanet3.classList.add('selected');
        activePlanet4.classList.remove('selected');
    }
    else if(fallingSpeed == 1.62) {
        activePlanet1.classList.remove('selected');
        activePlanet2.classList.remove('selected');
        activePlanet3.classList.remove('selected');
        activePlanet4.classList.add('selected');
    }
    
}

function setValueForDifficulty(inputFromHTML) {
        counter = inputFromHTML;

        let activeDifficulty1 = document.getElementsByClassName('difficulty')[0];
        let activeDifficulty2 = document.getElementsByClassName('difficulty')[1];
        let activeDifficulty3 = document.getElementsByClassName('difficulty')[2];
        
        if(counter == 20) {
            activeDifficulty1.classList.add('selected2');
            activeDifficulty2.classList.remove('selected2');
            activeDifficulty3.classList.remove('selected2');
        }
        else if(counter == 10) {
            activeDifficulty1.classList.remove('selected2');
            activeDifficulty2.classList.add('selected2');
            activeDifficulty3.classList.remove('selected2');
        }
        else if(counter == 5) {
            activeDifficulty1.classList.remove('selected2');
            activeDifficulty2.classList.remove('selected2');
            activeDifficulty3.classList.add('selected2');
        }
    
}


function fireAtMonster() {

    if(counter <= 0) {
        createPopup('Keine Versuche übrig', true);
    }
    else {
        counter--;

        let speed 
        speed = document.getElementById('speed').value;

        let angle 
        angle = document.getElementById('angle').value;

        angle = angle * (Math.PI / 180);
        
        let throwingDistance;
        
        throwingDistance = ((speed * speed) * Math.sin(2 * angle)) / fallingSpeed;
        throwingDistance = Math.round(throwingDistance);

        let difference;
        difference = distanceToMonster -  throwingDistance;
        difference = Math.abs(difference);

        if(distanceToMonster < throwingDistance) {
            createPopup('Das war um ' + difference + ' m zu weit');
        } else if (distanceToMonster == throwingDistance) {
            createPopup('Volltreffer!!', true);
        } else {
            createPopup('Das war um ' + difference + ' m zu kurz')
        }
    }
}


console.log('lib.js am Start');

function createPopup(errorText, reload = false) {
    console.log('ich habs versucht. LG Popup')
    let popup = document.createElement('div');
    popup.setAttribute('id', 'popup');
    
    let headline = document.createElement('h3');
    headline.append(errorText);

    let button = document.createElement('button');
    if(reload) {
        button.append('Nochmal spielen');
        button.addEventListener('click', function() {
            location.reload();
        })
    } else {
        button.append('OK');
        button.addEventListener('click', function() {
            document.getElementById('popup').remove();
        })
    }

    popup.append(headline);
    popup.append(button);
    document.body.append(popup);
}
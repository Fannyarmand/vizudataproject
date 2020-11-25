//const time = new Date();
// donne un object
//console.log(time.toString());
//toString() méthode qui retournera une représentation sous forme de chaîne de caractères de l’objet Date.
//console.log(time.getHours());
//.getHours() méthode qui retournera l'heure(affichage de 0 à 24)

renderSky();
setInterval(renderSky, 60000);

function renderSky() {
    const time = new Date();
    const hour = time.getHours();
    if (isNight(hour)) {
        renderNight();
    }
    if (isSunRising(hour)) {
        renderSunRising();
    }

}


function isNight(hour) {
    if (((hour >= 19) && (hour < 24)) || (hour < 6)) {
        return true;
    }
    return false;
}

function isSunRising(hour) {
    if ((hour >= 6) && (hour < 7)) {
        return true;
    }
    return false;
}

function renderSunRising() {
    let element = document.getElementById('SVGID_1_');

    element.innerHTML = `
    <stop  offset="0" style="stop-color:#0b0b3d"/>
    <stop  offset="0.5108" style="stop-color:#571948"/>
    <stop  offset="1" style="stop-color:#900c8e"/>
    `;
}


function renderNight() {
    let element = document.getElementById('SVGID_1_');

    element.innerHTML = `
    <stop  offset="0" style="stop-color:#010102"/>
    <stop  offset="0.5108" style="stop-color:#042055"/>
    <stop  offset="1" style="stop-color:#143061"/>
    `;
}






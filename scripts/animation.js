setInterval(date, 1000);

function date(){
    const d = new Date();
    const allsecondes = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();

    const newColor = changeColor(allsecondes);
    changeStyleElementBackgroundMountain('black');
    changeStyleElementPlan5(newColor);
    changeStyleElementCenterMountain(newColor);
    changeStyleElementPlan3(newColor);
    changeStyleElementMountainRight(newColor);
    changeStyleElementMountainNearLac(newColor);
}

function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
}


function changeColor(allsecondes) {
    const startColorR = 1;
    const startColorV = 1;
    const startColorB = 2;
    const endColorR = 144;
    const endColorV = 50;
    const endColorB = 27;
    const colorDiffR = endColorR - startColorR;
    const colorDiffV = endColorV - startColorV;
    const colorDiffB = endColorB - startColorB;
    const secondesDay = 86400 / 2000;

    const newColorR = Math.round(allsecondes * colorDiffR / secondesDay) % 256;
    const newColorV = Math.round(allsecondes * colorDiffV / secondesDay) % 256;
    const newColorB = Math.round(allsecondes * colorDiffB / secondesDay) % 256;
    return rgb(newColorR,newColorV,newColorB);

}

function changeStyleElementBackgroundMountain(newColor) {
    console.log(newColor);
    const newArray = document.getElementsByClassName('bgmtg');
    console.log(newArray);
    for (i = 0; i < newArray.length; i++) {
        newArray[i].removeAttribute("style");
        newArray[i].setAttribute("style","fill:" + newColor + ";");
    }

}

function changeStyleElementPlan5(newColor) {
    console.log(newColor);
    const newArray = document.getElementsByClassName('pl5');
    console.log(newArray);
    for (i = 0; i < newArray.length; i++) {
        newArray[i].removeAttribute("style");
        newArray[i].setAttribute("style","fill:" + newColor + ";");
    }

}

function changeStyleElementCenterMountain(newColor) {
    console.log(newColor);
    const newArray = document.getElementsByClassName('mtgmil4');
    console.log(newArray);
    for (i = 0; i < newArray.length; i++) {
        newArray[i].removeAttribute("style");
        newArray[i].setAttribute("style","fill:" + newColor + ";");
    }

}

function changeStyleElementPlan3(newColor) {
    console.log(newColor);
    const newArray = document.getElementsByClassName('pl3');
    console.log(newArray);
    for (i = 0; i < newArray.length; i++) {
        newArray[i].removeAttribute("style");
        newArray[i].setAttribute("style","fill:" + newColor + ";");
    }

}

function changeStyleElementMountainRight(newColor) {
    console.log(newColor);
    const newArray = document.getElementsByClassName('p2');
    console.log(newArray);
    for (i = 0; i < newArray.length; i++) {
        newArray[i].removeAttribute("style");
        newArray[i].setAttribute("style","fill:" + newColor + ";");
    }

}

function changeStyleElementMountainNearLac(newColor) {
    console.log(newColor);
    const newArray = document.getElementsByClassName('p2dr');
    console.log(newArray);
    for (i = 0; i < newArray.length; i++) {
        newArray[i].removeAttribute("style");
        newArray[i].setAttribute("style","fill:" + newColor + ";");
    }

}


// let original =anime({
//     targets:".bgmtg",
//     fill:"#B4D1CE",
//     easing: 'linear',
// })

// anime({
//     targets:".ciel",
//     easing: 'linear',
//     complete:function renderSunRising() {
//     let element = document.getElementById('SVGID_1_');

//     element.innerHTML = `
//     <stop  offset="0" style="stop-color:#0b0b3d"/>
//     <stop  offset="0.5108" style="stop-color:#571948"/>
//     <stop  offset="1" style="stop-color:#900c8e"/>
//     `;
// }
// })
// // anime({
// //     targets:".lac",
// //     fill: "url(#SVGID_2_)",
// //     easing: 'linear',
// // })

// anime({
//     targets:".pl5",
//     fill:"#99C6C4",
//     easing: 'linear',
// })

// anime({
//     targets:".mtgmil4",
//     fill:"#72ACB2",
//     easing: 'linear',
// })
// anime({
//     targets:".pl3",
//     fill:"#547B8C",
//     easing: 'linear',
// })
// anime({
//     targets:".p2",
//     fill:"#48657C",
//     easing: 'linear',
// })
// anime({
//     targets:".p2dr",
//     fill:"#61868E",
//     easing: 'linear',
// })
// // anime({
// //     targets:".mtglac",
// //     fill:"url(#SVGID_25_)",
// //     easing: 'easeInOutExpo',
// // })
// anime({
//     targets:".arbresderter",
//     fill:"#1C2D2D",
//     easing: 'linear',
// })
// anime({
//     targets:".terredevant",
//     fill:"#1C2D2D",
//     easing: 'linear',
// })
// anime({
//     targets:".arbresdevant",
//     fill:"#0f1019",
//     easing: 'linear',
// })




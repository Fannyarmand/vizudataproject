setInterval(date, 1000);

function date(){
    let d = new Date();
    let allsecondes = d.getHours()*3600 + d.getMinutes()*60 + d.getSeconds();

    let newColor = changeColor(allsecondes);
    changeStyleElement(newColor);
}

function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
}

function changeColor(allsecondes) {
    let startColorR = 1;
    let startColorV = 1;
    let startColorB = 2;
    let endColorR = 144;
    let endColorV = 50;
    let endColorB = 27;
    let colorDiffR = endColorR - startColorR;
    let colorDiffV = endColorV - startColorV;
    let colorDiffB = endColorB - startColorB;
    let secondesDay = 86400/2000;

    let newColorR = Math.round(allsecondes * colorDiffR / secondesDay)%255;
    let newColorV = Math.round(allsecondes * colorDiffV / secondesDay)%255;
    let newColorB = Math.round(allsecondes * colorDiffB / secondesDay)%255;
    return rgb(newColorR,newColorV,newColorB);

}

function changeStyleElement(newColor) {
    console.log(newColor);
    let newArray = document.getElementsByClassName('bgmtg');
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




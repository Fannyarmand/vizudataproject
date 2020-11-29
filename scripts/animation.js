const d = new Date();
const hours = d.getHours();
const minutes = d.getMinutes();
const secondes = d.getSeconds();

const allSecondes = hours * 3600 + minutes * 60 + secondes;
//setInterval(date, 1000);
const startColorR = 1;
const startColorV = 1;
const startColorB = 2;
const endColorR = 144;
const endColorV = 50;
const endColorB = 27;
const colorDiffR = endColorR - startColorR;
const colorDiffV = endColorV - startColorV;
const colorDiffB = endColorB - startColorB;
const secondesDay = 86400;

function changeColorR() {
    const newColorR = Math.round(allSecondes * colorDiffR / secondesDay);
    return newColorR;
}

function changeColorV() {
    const newColorV = Math.round(allSecondes * colorDiffV / secondesDay);
    return newColorV;
}

function changeColorB() {
    const newColorB = Math.round(allSecondes * colorDiffB / secondesDay);
    return newColorB;
}

function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
}

changeColorR();
changeColorV();
changeColorB();

let newColor = rgb(changeColorR(), changeColorV(),changeColorB());
console.log(newColor);

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




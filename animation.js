
//function date (){
  //var d = new Date();
//  var hours = d.getHours();
  //var minutes =d.getMinutes();
//  var secondes =d.getSeconds();

//  fullDate =hours + ":" + minutes + ":" + secondes;


//}
var d = new Date();
var hours = d.getHours();
var minutes =d.getMinutes();
var secondes =d.getSeconds();

var allsecondes=hours*3600 + minutes*60 + secondes;
//setInterval(date, 1000);
var startcolorR = 1;
var startcolorV = 1;
var startcolorB = 2;
var endcolorR = 144;
var endcolorV= 50;
var endcolorB = 27;
var secondesjour = 86400;
var newcolor;

function changecolorR (){
newcolorR=(allsecondes*endcolorR)/secondesjour;
console.log(newcolorR);
}
changecolorR();

function changecolorV (){
newcolorV=(allsecondes*endcolorV)/secondesjour;
console.log(newcolorV);
}
changecolorV();

function changecolorB (){
newcolorB=(allsecondes*endcolorB)/secondesjour;
console.log(newcolorB);
}
changecolorB();

newcolor = (changecolorR(),changecolorV(),changecolorB());

console.log(newcolor);
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






// function renderSunRising() {
//     let element = document.getElementById('SVGID_1_');

//     element.innerHTML = `
//     <stop  offset="0" style="stop-color:#0b0b3d"/>
//     <stop  offset="0.5108" style="stop-color:#571948"/>
//     <stop  offset="1" style="stop-color:#900c8e"/>
//     `;
// }

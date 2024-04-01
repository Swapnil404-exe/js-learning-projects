// const start=document.querySelector("#start");
// const stop=document.querySelector("#stop");

// const randomColor=function(){
//     hex='0123456789ABCDEF';
//     color='#';
//     for(i=0;i<6;i++){
//         color+=hex[Math.floor(Math.random()*16)];
//     }
//     console.log(color);
//     return color;
// }
// let intervalId
// const startColorChange=function(){
//     intervalId=setInterval(changeBgColor(),500)
   
//     function changeBgColor(){
//         document.body.backgroundcolor=randomColor();
//     }
// }

// const stopColorChange=function(){
//     clearInterval(intervalId);
//     intervalId=null;
// }
// start.addEventListener('click',startColorChange());
// stop.addEventListener('click',stopColorChange());



// // const start=document.getElementById('start')
// // const stop=document.querySelector('#stop');

// // const randomColor(){
// //     let letters='123456789ABCDEF';
// //     let color="#";
// //     for(i=0;i<6;i++){
// //         color+=color[Math.floor(Math.random()*16)];
// //     }
// //     console.log(color);
// //     return color;
// // }
// // const startChangingColor=function(){
// //     document.body.style.backgroundColor=randomColor();
// // }


// // start.addEventListener('click',startChangingColor())
// // stop.addEventListener('click',stopChangingColor())

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 0);
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
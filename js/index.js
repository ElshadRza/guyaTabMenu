const buttons=document.querySelectorAll("#container .buttons button");
const meaningfulText=document.querySelectorAll("#container .city");

Array.from(buttons)
Array.from(meaningfulText)
console.log((buttons));
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",function () {
      if(buttons[i]===buttons[0]){
        meaningfulText[1].style.display="none";
        meaningfulText[2].style.display="none";
        meaningfulText[0].style.display="block";
      }
      else if(buttons[i]===buttons[1]){
        meaningfulText[0].style.display="none";
        meaningfulText[1].style.display="block";
      }
      else if(buttons[i]===buttons[2]){
        meaningfulText[0].style.display="none";
        meaningfulText[1].style.display="none";      
        meaningfulText[2].style.display="block";
    }
    })
    
}



















// buttons.forEach(function(button){
//     button.addEventListener("click",function() {
        
//         meaningfulText.forEach(function (text) {
//             console.log("nigga");
//             text.style.display="block"
//         })
//     })
    
// })

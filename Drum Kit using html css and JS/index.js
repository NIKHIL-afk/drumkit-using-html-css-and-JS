
var numberofdrumbuttons=document.querySelectorAll(".drum").length;

for(var i = 0; i<numberofdrumbuttons ;i++){//***imp*** this for loop is for applying all the below properties to each and every element having class "drum"
  document.querySelectorAll(".drum")[i].addEventListener("click",function ()
  { var buttonInnerHtml = this.innerHTML;
soundrec(buttonInnerHtml);
buttonAnimation(buttonInnerHtml);
});

}
document.addEventListener("keypress",function(event){
  soundrec(event.key);
  buttonAnimation(event.key);
});

//this is the function to detect the character which was clicked/pressed and play the audio accordingly
function soundrec(key){
  switch (key) {
    case "w":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;

    case "a":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

    case "s":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    case "d":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    case "j":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;

    case "k":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;

    case "l":
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;

    default:console.log(buttonInnerHtml);



  }


}

function buttonAnimation(currentKey){
  var activebutton=document.querySelector("."+currentKey);
  activebutton.classList.add("pressed"); //pressed is the class which contains all the details for a button when it is pressed.
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },100);

}







// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

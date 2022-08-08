for( var i = 0 ; i < document.querySelectorAll(".songTitle").length; i++)
{
document.querySelectorAll(".songTitle")[i].addEventListener("click",handleClicked);
}

function handleClicked()
{
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
}
var audio1 = new Audio('songs/1.mp3');
function makeSound (key)
{
  switch(key)
  {

    case "Dil Kyun Yeh Mera":
    audio1.pause();
     audio1.currentTime = 0;
    audio1 = new Audio('songs/1.mp3');
    audio1.play();
    break;

    case "Tere Sath Hoon Main":
    audio1.pause();
     audio1.currentTime = 0;
    audio1 = new Audio('songs/2.mp3');
    audio1.play();
      break;


    case "Jhoom":
    audio1.pause();
     audio1.currentTime = 0;
    audio1 = new Audio('songs/3.mp3');
    audio1.play();
    break;


    case "Ek Raat":
    audio1.pause();
     audio1.currentTime = 0;
    audio1 = new Audio('songs/4.mp3');
    audio1.play();
    break;


    case "Jashne Bahara":
    audio1.pause();
     audio1.currentTime = 0;
    audio1 = new Audio('songs/5.mp3');
    audio1.play();
    break;


    case "Is Qadar Pyar Hai":
    audio1.pause();
     audio1.currentTime = 0;

    audio1 = new Audio('songs/6.mp3');
    audio1.play();
    break;


    case "Lazy Lamhe":
    audio1.pause();
     audio1.currentTime = 0;
    audio1 = new Audio('songs/7.mp3');
    audio1.play();
    break;

    case "Madhubala":
    audio1.pause();
     audio1.currentTime = 0;
    audio1 = new Audio('songs/8.mp3');
    audio1.play();
    break;
    default:
        console : console.log(key);

  }
}

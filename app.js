//*****---------- Barre de Navigation Fixe ----------*****//

let navBarre = document.getElementById("navBarre");
console.log(navBarre);

function fixedNavBarre() {
  if(document.body.scrollTop > 499 || document.documentElement.scrollTop > 499) {
    navBarre.style.position = "fixed";
    navBarre.style.top = "0";
    navBarre.style.background = "#000";
  } else if(document.body.scrollTop = 100 || document.documentElement.scrollTop > 100){
    navBarre.style.position = "relative";
    navBarre.style.background = "transparent";
  }
}

//*****---------- Scrool To Top ----------*****//

let myButton = document.getElementById('myButton');

/*****  quand on scrolls de 100px on montre le boutton *****/

function scrollFunction() {
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    myButton.style.opacity = "1";
  } else {
    myButton.style.opacity = "0";
  }
}

/*****  Activé mes fonction *****/

window.onscroll = ()=> {
  scrollFunction()
  fixedNavBarre()
};
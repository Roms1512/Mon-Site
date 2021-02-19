/*---------- loader ----------*/ 

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
});

/*---------- Barre de Navigation Fixe ----------*/

let navBarre = document.getElementById("navBarre");
console.log(navBarre);

navBarre.addEventListener("scroll", (e) => {
  navBarre.style.position = "fixed";
});

/*---------- Scrool To Top ----------*/

let myButton = document.getElementById('myButton');
console.log(myButton);

/*****  quand on scrolls de 100px on montre le boutton *****/
window.onscroll = ()=> {
  scrollFunction()
};

function scrollFunction() {
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    myButton.style.opacity = "1";
  } else {
    myButton.style.opacity = "0";
  }
}
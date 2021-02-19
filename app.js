// loader

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
});

// allBlock

const allBlock = document.querySelectorAll(".projet");
allBlock.forEach((element) => {
  element.addEventListener("click", (e) => {
    // console.log(e.target);
    e.target.classList.add("active");

    // supprimer la class des autres
    for (let i = 0; i < allBlock.length; i++) {
      if (allBlock[i] !== e.target) {
        allBlock[i].classList.remove("active");
      }
    }
  });
});

// nav Barre Fixed

let navBarre = document.getElementById("navBarre");
console.log(navBarre);

navBarre.addEventListener("scroll", (e) => {
  navBarre.style.position = "fixed";
});

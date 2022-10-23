// Scroll To Top

const scrollToTop = document.getElementById("scroll");

window.addEventListener("scroll", () => {
    if(window.scrollY > 110){
        scrollToTop.style.display="block";
    } else {
        scrollToTop.style.display="none";
    }
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Drop-down Article

let arrows = document.querySelectorAll(".visible-content img");
let displayContent = document.querySelectorAll(".invisible-content");

arrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
        if (arrow.src.includes("down")) {
            arrow.src = "medias/arrow-up.svg";
        } else if (arrow.src.includes("up")) {
            arrow.src = "medias/arrow-down.svg";
        }
        displayContent[index].classList.toggle("visible");
    })
});
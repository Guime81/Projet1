// Burger-Menu

const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const burgerMenu = document.getElementById("burger-menu");
const menu = document.getElementById("menu");

burgerMenu.addEventListener("click", () =>{
    bar1.classList.toggle("rotation");
    bar2.classList.toggle("disparition");
    bar3.classList.toggle("rotation2");
    menu.classList.toggle("menu-list-active");
});


// Scroll Down

const down = document.querySelector(".down");
const bubbles = document.querySelector(".bubble");

down.addEventListener("click", () => {
    let headerHeight = document.querySelector("header.header-flex").offsetHeight;
let bannerHeight = document.querySelector("section.search").offsetHeight;
    document.documentElement.scrollTop = bannerHeight - headerHeight;
});


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
    let headerHeight = document.querySelector("header.header-flex").offsetHeight;
    let bannerHeight = document.querySelector("section.search").offsetHeight;
    document.documentElement.scrollTop = bannerHeight - headerHeight;
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
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


// Scroll Down to Main

const down = document.querySelector(".down");
down.addEventListener("click", () => {
    let headerHeight = document.querySelector("header").offsetHeight;
    let bannerHeight = document.querySelector("section.search").offsetHeight;
    document.documentElement.scrollTop = bannerHeight - headerHeight;
});


// Disparition arrowDown and bubbles on scroll

const divBubble = document.querySelector("div.bubble-position")
window.addEventListener("scroll", () => {
    let headerHeight = document.querySelector("header").offsetHeight;
    let divBubbleHeightTop = divBubble.offsetTop;
    if(window.scrollY > (divBubbleHeightTop - headerHeight)){
        divBubble.style.opacity="0";
        divBubble.style.visibility="hidden";
        divBubble.style.transition="visibility 0s linear 0.5s, opacity 0.6s linear";     
    } else {
        divBubble.style.opacity="1";
        divBubble.style.visibility="visible"
        divBubble.style.transition="opacity 0.6s linear";
    }    
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
    let headerHeight = document.querySelector("header").offsetHeight;
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
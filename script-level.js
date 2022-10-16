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


//Switch on - off Display levels

const buttons = document.querySelectorAll(".sub-menu li");
const levels = document.querySelectorAll("main section");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        levels.forEach((level) => {
            level.classList.remove("disp-active");
            level.classList.add("disp-inactive");
        });
        levels[index].classList.add("disp-active");
        levels[index].classList.remove("disp-inactive");
    });
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
    document.documentElement.scrollTop = 0;
});


// Navigation by tabs diver

let tabs = document.querySelectorAll(".tabs h4");
let tabContents = document.querySelectorAll(".tab-content .level");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});


// Navigation by tabs teacher

let tabsEns = document.querySelectorAll(".tabs-ens h4");
let tabContentsEns = document.querySelectorAll(".tab-content-ens .level");

tabsEns.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContentsEns.forEach((content) => {
      content.classList.remove("active");
    });
    tabsEns.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContentsEns[index].classList.add("active");
    tabsEns[index].classList.add("active");
  });
});
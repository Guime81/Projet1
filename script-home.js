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


//Switch on - off Article welcome page

const tabs = document.querySelectorAll(".sub-menu li");
const articles = document.querySelectorAll("main article");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        articles.forEach((article) => {
            article.classList.remove("active-article");
            article.classList.add("inactive-article-flex");
        });
        articles[index].classList.add("active-article");
        articles[index].classList.remove("inactive-article-flex");
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




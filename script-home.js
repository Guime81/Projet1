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


//Display on - off Article page Accueil

const dataTab = document.getElementById("data-tab");
const healthTab = document.getElementById("health-tab");
const jobTab = document.getElementById("job-tab");

const articleData = document.getElementById("data");
const articleHealth = document.getElementById("health");
const articleJob = document.getElementById("job");


dataTab.addEventListener("click", () =>{
    articleData.classList.replace("flex", "active-article");
    articleHealth.classList.replace("active-article", "flex");
    articleJob.classList.replace("active-article", "flex");
});


healthTab.addEventListener("click", () =>{
    articleData.classList.replace("active-article", "flex");
    articleHealth.classList.replace("flex", "active-article");
    articleJob.classList.replace("active-article", "flex");
});


jobTab.addEventListener("click", () =>{
    articleData.classList.replace("active-article", "flex");
    articleHealth.classList.replace("active-article", "flex");
    articleJob.classList.replace("flex","active-article");        
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
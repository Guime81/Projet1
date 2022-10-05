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
    articleData.classList.remove("flex");
    articleData.classList.add("active-article");
    articleHealth.classList.remove("active-article");
    articleJob.classList.remove("active-article");
    articleJob.classList.add("flex");
    articleHealth.classList.add("flex");
 })

healthTab.addEventListener("click", () =>{
    articleHealth.classList.remove("flex");
    articleData.classList.add("flex");
    articleData.classList.remove("active-article");
    articleHealth.classList.add("active-article");
    articleJob.classList.remove("active-article");
    articleJob.classList.add("flex");
})

 jobTab.addEventListener("click", () =>{
    articleJob.classList.remove("flex");
    articleData.classList.remove("active-article");
    articleHealth.classList.remove("active-article");
    articleHealth.classList.add("flex");
    articleJob.classList.add("active-article");
    articleData.classList.add("flex");
})


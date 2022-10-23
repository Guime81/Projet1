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

// Close Menu Burger on touch outside

document.addEventListener("click", (e) => {
    if(e.target.id !== "menu" && e.target.id !== "burger-menu" && e.target.id !== "bar1" && e.target.id !== "bar2" && e.target.id !== "bar3"){
    menu.classList.remove("menu-list-active");
    bar1.classList.remove("rotation");
    bar2.classList.remove("disparition");
    bar3.classList.remove("rotation2");
    }
});
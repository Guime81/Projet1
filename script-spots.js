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


// Modal

const modals = document.querySelectorAll(".modal");
const openBtns = document.querySelectorAll("nav.menu-modal button");
const closeBtns = document.querySelectorAll(".closemodal");

openBtns.forEach((openBtn, index) => {
    openBtn.addEventListener("click", () => {
        modals[index].showModal();
    })
});

closeBtns.forEach((closeBtn, index) => {
    closeBtn.addEventListener("click", () => {
        modals[index].close();
    })
})


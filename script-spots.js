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


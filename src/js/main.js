const menuHamburguesa = document.getElementById("menu-mobile");
const modalMenu = document.getElementById("modal-menu");
const closeModal = document.getElementById("close-modal");

menuHamburguesa.addEventListener("click", () => {
        if(window.getComputedStyle(modalMenu).display === "none"){
                modalMenu.style.display = "block";
                menuHamburguesa.style.display = "none";
               
        }
});

closeModal.addEventListener("click", () => {
        if(window.getComputedStyle(modalMenu).display === "block"){
                modalMenu.style.display = "none";
                menuHamburguesa.style.display = "block";
        }
});
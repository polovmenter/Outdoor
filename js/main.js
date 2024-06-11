document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    
    document.querySelector(".burger-button").addEventListener("click", () => {
        mobileMenu.classList.add("mobile-menu--open");
    })
    document.querySelector(".mobile-menu__close-button").addEventListener("click", () => {
        mobileMenu.classList.remove("mobile-menu--open");
    })
})
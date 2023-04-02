const navToogle = document.querySelector(".btn_toogle");
const navMenu = document.querySelector(".menu__lista");

navToogle.addEventListener("click", () => {
    navMenu.classList.toggle("menu__lista_visible")
})
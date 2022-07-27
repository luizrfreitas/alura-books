const menuHamburguer = document.getElementById("menu-hamburguer");
const menuNav = document.getElementById("nav");

menuHamburguer.addEventListener("click", ()=> {
    menuNav.classList.toggle('menu-lateral--ativo')
})
//SELECCIONES PARA BARRA DE NAVEGACIÓN BURGER
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

//CERRAR EL MENÚ DE BURGER
const navLink= document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

//SELECCIÓN DE DESPLAZAR HACIA ARRIBA
const scrollUp = document.querySelector("#scroll-up");

//FUNCIONALIDAD DE DESSPLAZAR HACIA ARRIBA
scrollUp.addEventListener("click", ()=> {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
});



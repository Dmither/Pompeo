const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", function (e){
    if (!menu.classList.contains(".menu_active")){
        menu.classList.toggle("menu_active");
    }
})
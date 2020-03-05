let nav = document.querySelector('nav');
let burger = document.querySelector('.burger-btn');
let mobCont = document.querySelector('.mobile-content');

function checkBurger() {
    if (burger.classList == 'burger-btn') {
        burger.classList.add('burger_active');
        nav.style.display = 'block';
        mobCont.style.display = 'block';
    } else {
        burger.classList.remove('burger_active');
        nav.style.display = 'none';
        mobCont.style.display = 'none';
    }
}
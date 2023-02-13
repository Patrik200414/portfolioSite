const menueButton = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn-burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');

let showMenu = false;

menueButton.addEventListener('click', toggleMenu);

function toggleMenu(){
    burger.classList.toggle('open');
    nav.classList.toggle('open');
    menuNav.classList.toggle('open');
}
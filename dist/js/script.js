const menueButton = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn-burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav-item');

menueButton.addEventListener('click', toggleMenu);

function toggleMenu(){
    burger.classList.toggle('open');
    nav.classList.toggle('open');
    menuNav.classList.toggle('open');
    navItems.forEach(item => item.classList.toggle('open'));
}
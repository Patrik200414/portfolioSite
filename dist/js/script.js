const menueButton = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn-burger');

let showMenu = false;

menueButton.addEventListener('click', toggleMenu);

function toggleMenu(){
    burger.classList.toggle('open');
}
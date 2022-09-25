const pages = ['destination', 'crew', 'technology'];
const ruta = window.location.pathname.toLowerCase();

pages.forEach(e => {
    if (ruta.includes(e)) {
        addBackground(e);
    } else if (ruta === '/starter-code/' || ruta.includes('index')) {
        addBackground('home');
    }
});

function addBackground(page) {
    document.querySelector('body').classList.add('background-' + page);
    document.querySelector('.menu_' + page).classList.add('active');
}

//** Menu button Click Event */
let isClose = false;
const buttonMenu = document.getElementById('buttonMenu');
const modal = document.getElementById('pre-modal');
const toggleMenu = document.querySelector('#buttonMenu img');
buttonMenu.addEventListener('click', showMenu);

function showMenu() {

    if (isClose) {
        modal.style.display = 'none';
        toggleMenu.src = 'assets/shared/icon-hamburger.svg';

        isClose = false;
    } else {
        modal.style.display = 'block';
        toggleMenu.src = 'assets/shared/icon-close.svg';

        isClose = true;
    }
0
}
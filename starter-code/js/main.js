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
const button = document.getElementById('buttonMenu');
button.addEventListener('click', showMenu);

function showMenu() {
}
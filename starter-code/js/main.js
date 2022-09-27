const pages = ['destination', 'crew', 'technology'];
const ruta = window.location.pathname.toLowerCase();

pages.forEach(page => {
    if (ruta.includes(page)) {
        addActive(page);
    } else if (ruta === '/starter-code/' || ruta.includes('index')) {
        addActive('home');
    }
});

/** [Method] Add active to the menu */
function addActive(page) {
    document.querySelector('.menu_' + page).classList.add('active');
    document.querySelector('.modal .menu_' + page).classList.add('active');
}

switch (ruta) {
    case '/starter-code/':
        body.classList.add('background-home');
        document.querySelector('.menu_home').classList.add('active');
        break;
    case home:
        body.classList.add('background-home');
        document.querySelector('.menu_home').classList.add('active');
        break;
    case destination:
        body.classList.add('background-destination');
        document.querySelector('.menu_destination').classList.add('active');
        break;
    case crew:
        body.classList.add('background-crew');
        document.querySelector('.menu_crew').classList.add('active');
        break;
    case technology:
        body.classList.add('background-technology');
        document.querySelector('.menu_technology').classList.add('active');
        break;
}

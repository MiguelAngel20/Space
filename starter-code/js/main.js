const ruta = window.location.pathname;

const body = document.querySelector('body');

const home = '/starter-code/index.html';
const destination = '/starter-code/destination-moon.html';
const crew = '/starter-code/crew-commander.html';
const crew1 = '/starter-code/crew-specialist.html';
const crew2 = '/starter-code/crew-engineer.html';
const crew3 = '/starter-code/crew-pilor.html';
const technology = '/starter-code/technology.html';

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
    case crew1:
        body.classList.add('background-crew');
        document.querySelector('.menu_crew').classList.add('active');
        break;
    case crew2:
        body.classList.add('background-crew');
        document.querySelector('.menu_crew').classList.add('active');
        break;
    case crew3:
        body.classList.add('background-crew');
        document.querySelector('.menu_crew').classList.add('active');
        break;
    case technology:
        body.classList.add('background-technology');
        document.querySelector('.menu_technology').classList.add('active');
        break;
}
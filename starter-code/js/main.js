const ruta = window.location.href;

if (ruta === 'http://127.0.0.1:5500/starter-code/destination-moon.html') {
    const body = document.getElementById('body');

    body.classList.add('background-destination');
}
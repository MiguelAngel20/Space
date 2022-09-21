const button1 = document.querySelector('.buttonTech-1');
const button2 = document.querySelector('.buttonTech-2');
const button3 = document.querySelector('.buttonTech-3');

button1.addEventListener('click', getData);
button2.addEventListener('click', getData);
button3.addEventListener('click', getData);

function getData() {
    const dataTech = this.getAttribute('dataTech');

    addButtonActive(this);

    const url = 'data.json';
    fetch(url)
        .then(result => result.json())
        .then(resultado => showHTML(resultado.technology[dataTech]));
}

function showHTML(data) {
    const title = document.querySelector('.title-technology');
    const image = document.querySelector('.technology-image img');
    const description = document.querySelector('.technology-description');

    title.innerHTML = data.name;
    image.src = data.images.portrait;
    description.innerHTML = data.description;
}

function addButtonActive(button) {
    document.querySelector('#technologies .active').classList.remove('active');
    button.classList.add('active');
}
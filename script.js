const homeSection = document.getElementById('home');

const infoSection = document.getElementById('info');

const navbar = document.getElementById('navbar');



function changeColor (){
    document.body.style.backgroundColor = 'lightblue';
    navbar.style.backgroundColor = 'lightblue';
}

function changeColorBack(){
    document.body.style.backgroundColor = 'teal';
    navbar.style.backgroundColor = 'teal';
}

homeSection.addEventListener('click', changeColor);


infoSection.addEventListener('click', changeColorBack);
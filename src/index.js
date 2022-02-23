import mainPage from './main-page.js';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import './style.css';


const pageContent = document.getElementById('content');
pageContent.append(...mainPage());
const body = document.querySelector('.body');
body.append(...home());

const buttonHome = document.querySelector('.home');
const buttonMenu = document.querySelector('.menu');
const buttonContact = document.querySelector('.contact');

buttonHome.addEventListener('click', () => {
    buttonContact.classList.remove('active');
    buttonMenu.classList.remove('active');
    buttonHome.classList.add('active');
    body.innerHTML = "";
    body.append(...home());

});

buttonMenu.addEventListener('click', () => {
    buttonHome.classList.remove('active');
    buttonContact.classList.remove('active');
    buttonMenu.classList.add('active');
    body.innerHTML = "";
    body.append(...menu());
});

buttonContact.addEventListener('click', () => {
    buttonHome.classList.remove('active');
    buttonMenu.classList.remove('active');
    buttonContact.classList.add('active');
    body.innerHTML = "";
    body.append(...contact());
});
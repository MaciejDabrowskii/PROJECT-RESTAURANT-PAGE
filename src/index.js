import mainPage from './main-page.js';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import './style.css';


const pageContent = document.getElementById('content');
pageContent.append(...mainPage());
const body = document.querySelector('.body');
body.append(...contact());
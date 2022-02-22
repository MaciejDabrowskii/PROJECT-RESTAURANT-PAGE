const mainPage = () => {
    
    const header = document.createElement('div');
    const name = document.createElement('h1');
    const buttons = document.createElement('div');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');
    const body = document.createElement('div');
    const footer = document.createElement('div');

    header.classList.add('header');
    name.classList.add('name')
    buttons.classList.add('buttons');
    home.classList.add('home');
    menu.classList.add('menu');
    contact.classList.add('contact');
    body.classList.add('body');
    footer.classList.add('footer');

    name.textContent = "Best Burgers";
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";
    footer.textContent = "Best burgers by Maciej Dabrowski";

    header.append(name, buttons);
    buttons.append(home, menu, contact);

    return [
        header,
        body,
        footer,
    ];
};

export default mainPage;
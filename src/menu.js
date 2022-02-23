import burgerPhoto1 from './images/burger1.jpg';
import burgerPhoto2 from './images/burger2.jpg';
import burgerPhoto3 from './images/burger3.jpg';
import burgerPhoto4 from './images/burger4.jpg';
import burgerPhoto5 from './images/burger5.jpg';
import burgerPhoto6 from './images/burger6.jpg';


const menu = () => {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menuDiv');
    let menuArray = [];
    let burgerNames = ['Classic', 'Cheeseburger', 'Chickenburger', 'Spicyburger', 'Double-Classic', 'Double-Cheeseburger'];
    let burgerDescriptions = [
        ['200g Beef', 'Lettuce', 'Tomato', 'Pickle', 'Mayo', 'Onion'],
        ['200g Beef', 'Lettuce', 'Tomato', 'Pickle', 'Mayo', 'Cheddar', "Onion"],
        ['200g Chicken Breast', 'Lettuce', 'Cheddar', 'Pickle', 'Mayo'],
        ['200g Beef', 'Lettuce', 'Jalapeno', 'Tomato', 'Mayo'],
        ['2x 200g Beef', 'Lettuce', 'Tomato', 'Pickle', 'Mayo'],
        ['2x 200g Beef', 'Lettuce', 'Tomato', 'Pickle', 'Mayo', '2x Cheddar'],
    ];
    let burgerPhotos = [burgerPhoto1, burgerPhoto2, burgerPhoto3, burgerPhoto4, burgerPhoto5, burgerPhoto6];
    for (let i = 0; i < 6 ; i++) {
        let burger = document.createElement('div');
        burger.classList.add('menu-item', `menu-item-${i}`);
        let burgerName = document.createElement('h3');
        burgerName.textContent = burgerNames[i];
        
        let burgerDescription = document.createElement('ul');
        for (let j = 0; j < burgerDescriptions[i].length; j++) {
            let ingridient = document.createElement('li');
            ingridient.textContent = burgerDescriptions[i][j];
            burgerDescription.appendChild(ingridient);
        };

        let burgerImage = document.createElement('img');
        burgerImage.classList.add('burger-image', `burger-image-${i}`);
        burgerImage.src = burgerPhotos[i];
        
        burger.append(burgerName, burgerDescription, burgerImage);
        menuArray.push(burger);
    };

    menuDiv.append(...menuArray);

    return [
        menuDiv
    ];
};

export default menu;
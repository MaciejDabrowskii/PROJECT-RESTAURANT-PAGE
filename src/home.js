import burgerImage from './images/burger.jpg';
const home = () => {
    const homeContents = document.createElement('div');
    const image = document.createElement('img');
    const about = document.createElement('div');

    homeContents.classList.add('homeContents');
    image.classList.add('home-photo');
    about.classList.add('about');
    about.textContent = 'Best Burgers Restaurant is a place where excellent flavors and cozy atmosphere evoke truly positive emotions. It is a place where your satisfaction has been a priority for 4 years and the dishes are seasoned with passion and commitment. We try to make the visit to our restaurant always a nice time and pleasure for the palate.';
    image.src = burgerImage;
    homeContents.append(image, about);

    return [
        homeContents
    ];
};
export default home;
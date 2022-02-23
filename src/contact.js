import homeIcon from './images/home.png';
import contactIcon from './images/contact.png';
import mapImage from './images/map.png';



const contact = () => {
    const conatctData = document.createElement('div');
    conatctData.classList.add('conatctData');
    
    const contactHeader = () => { 
        const header = document.createElement('h2');
        header.textContent = 'Contact Us!';
        
        return header;
    };

    const infoDiv = () => { 
        const info = document.createElement('div');
        info.classList.add('infoDiv');
        
        const address = () => {
            const addressDiv = document.createElement('div');
            addressDiv.classList.add('address');

            const addressIconDiv = document.createElement('div');
            addressIconDiv.classList.add('addressIconDiv');
            const addressIconImg = document.createElement('img');
            addressIconImg.classList.add('addressIconImg');
            addressIconImg.src = homeIcon;
            addressIconDiv.append(addressIconImg);

            
            const addressHeader = document.createElement('h3')
            addressHeader.classList.add('addressHeader');
            addressHeader.innerText = "Address:";
            
            const addressName = document.createElement('p');
            addressName.classList.add('addressName');
            addressName.innerText = "Best Burgers - Wrocław";

            const addressStreet = document.createElement('p');
            addressStreet.classList.add('addressStreet');
            addressStreet.innerText = "Psie Budy 7/8/9, 50-080 Wrocław";

            addressDiv.append(addressIconDiv, addressHeader, addressName, addressStreet);
            
            return addressDiv;
        };


        const contactElements = () => {
            const contactDiv = document.createElement('div');
            contactDiv.classList.add('contactDiv');

            const contactIconDiv = document.createElement('div');
            contactIconDiv.classList.add('contactIconDiv');
            const contactIconImg = document.createElement('img');
            contactIconImg.classList.add('contactIconImg');
            contactIconImg.src = contactIcon;
            contactIconDiv.append(contactIconImg);

            const contactHeader = document.createElement('h3')
            contactHeader.classList.add('contactHeader');
            contactHeader.innerText = "Contact:";
            
            const contactEmail = document.createElement('p');
            contactEmail.classList.add('contactEmail');
            contactEmail.innerText = "Email: best-burgers@burger.com";

            const contactPhone = document.createElement('p');
            contactPhone.classList.add('contactPhone');
            contactPhone.innerText = "Phone: +48 999 999 999";

            contactDiv.append(contactIconDiv, contactHeader, contactEmail, contactPhone);
            
            return contactDiv;
        };

        const map = () => {
            const mapDiv = document.createElement('div');
            mapDiv.classList.add('mapDiv');
            const mapHeader = document.createElement('h3');
            mapHeader.textContent = "FIND US!";
            const mapImg = document.createElement('img');
            mapImg.classList.add('mapImg');
            mapImg.src = mapImage;
            
            mapDiv.append(mapHeader, mapImg);
            
            return mapDiv;
        }

        info.append(address(), contactElements(), map());
        return info;
    };
    
    conatctData.append(contactHeader(), infoDiv())

    return [
        conatctData
    ];
}

export default contact;
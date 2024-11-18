const temples = [
    {
        name: "Curitiba Brazil",
        url: "images/temples/curitiba-brazil-temple.jpg"
    },
    {
        name: "Brasília Brazil",
        url: "images/temples/brasilia-brazil-temple.jpg"
    },
    {
        name: "Rome Italy",
        url: "images/temples/rome-temple.jpg"
    },
    {
        name: "Arequipa Peru",
        url: "images/temples/arequipa-peru-temple.jpeg"
    },
    {
        name: "Houston Texas",
        url: "images/temples/houston-temple.jpg"
    },
    {
        name: "Rio De Janeiro Brazil",
        url: "images/temples/rio-de-janeiro-temple.jpeg"
    },
    {
        name: "Salt Lake City",
        url: "images/temples/salt-lake-temple.jpg"
    },
    {
        name: "São Paulo Brazil",
        url: "images/temples/sao-paulo-temple.jpg"
    },
    {
        name: "Porto Alegre Brazil",
        url: "images/temples/porto-alegre-brazil-temple.jpg"
    }
]

function populateTemplesGallery() {
	const galleryElement = document.querySelector('#gallery');

	temples.forEach(temple => {
		const figureElement = document.createElement('figure');
		figureElement.classList.add('gallery-item');

		const templeImage = document.createElement('img');
		templeImage.setAttribute('src', temple.url);
		templeImage.setAttribute('alt', `${temple.name} Temple`);

		const templeNameCaption = document.createElement('figcaption');
		templeNameCaption.textContent = temple.name;

		figureElement.appendChild(templeImage);
		figureElement.appendChild(templeNameCaption);

		galleryElement.appendChild(figureElement);
	});
}

/** Responsive Menu */

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


/** Active Menu Link */
const menuOptions = document.querySelectorAll('nav a');
menuOptions.forEach(option => {
	option.addEventListener('click', function() {
		const activeOption = document.querySelector('nav a.active');
		activeOption.classList.remove('active');

		option.classList.add('active');
	});
});

populateTemplesGallery();
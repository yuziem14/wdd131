const _temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Curitiba Brazil Temple",
        location: "Curitiba, Paraná, Brazil",
        dedicated: "2008, June, 1",
        area: 27850,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-1078-main.jpg",
    },
    {
        templeName: "Brasília Brazil Temple",
        location: "Brasília, Federal District, Brazil",
        dedicated: "2023, September, 17",
        area: 25000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39204.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019, March, 10-12",
        area: 41010,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642.jpg"
    },
    {
        templeName: "Arequipa Peru Temple",
        location: "Arequipa, Peru",
        dedicated: "2019, December, 15",
        area: 26969,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186.jpg"
    },
    {
        templeName: "Houston Texas Temple",
        location: "Curitiba, Paraná Brazil",
        dedicated: "2000, August, 26-27",
        area: 33970,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/houston-texas-temple/houston-texas-temple-23479.jpg"
    },
    {
        templeName: "Rio De Janeiro Brazil Temple",
        location: "Rio de Janeiro, Rio de Janeiro, Brazil",
        dedicated: "2022, May, 8",
        area: 29966,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167.jpg"
    },
    {
        templeName: "Salt Lake City Temple",
        location: "Salt Lake City, Utah",
        dedicated: "1893, April, 6-24",
        area: 382207,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-5365.jpg"
    },
    {
        templeName: "São Paulo Brazil Temple",
        location: "São Paulo, São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-9671.jpg"
    },
    {
        templeName: "Porto Alegre Brazil Temple",
        location: "Porto Alegre, Rio Grande do Sul, Brazil",
        dedicated: "2000, December, 17",
        area: 13325,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-14267.jpg"
    }
]

const filters = {
    'Home': (temple) => true,
    'Old': (temple) => getDedicationYear(temple.dedicated) < 1900,
    'New': (temple) => getDedicationYear(temple.dedicated) > 2000,
    'Large': (temple) => temple.area > 90000.00,
    'Small': (temple) => temple.area < 10000.00
}

function getDedicationYear(dedicationDate) {
    const [year, month, day] = dedicationDate.split(',').map(token => token.trim());
    return Number(year);
}

function populateTemplesGallery(temples = []) {
	const galleryElement = document.querySelector('#gallery');
    const galleryItemTemplate = document.querySelector('.gallery-item#template');

	temples.forEach(temple => {
        const itemElement = galleryItemTemplate.cloneNode(true);
        itemElement.removeAttribute('id');

        itemElement.querySelector('h3').textContent = temple.templeName;
        itemElement.querySelector('.info-item .location').textContent = temple.location;
        itemElement.querySelector('.info-item .dedication').textContent = temple.dedicated;
        itemElement.querySelector('.info-item .size').textContent = `${temple.area} sq ft`;

        const templeImage = itemElement.querySelector('img');
		templeImage.setAttribute('src', temple.imageUrl);
		templeImage.setAttribute('alt', `${temple.templeName}`);

		galleryElement.appendChild(itemElement);
	});
}

function clearGallery() {
    const items = document.querySelectorAll('#gallery .gallery-item');
    items.forEach(item => item.remove());
}

function filterTemples(option = 'Home') {
    clearGallery();
    populateTemplesGallery(_temples.filter(filters[option]));
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
        
        filterTemples(option.title);
	});
});

populateTemplesGallery(_temples);
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const menuOptions = document.querySelectorAll('nav a');

menuOptions.forEach(option => {
	option.addEventListener('click', function() {
		const activeOption = document.querySelector('nav a.active');
		activeOption.classList.remove('active');

		option.classList.add('active');
	});
})
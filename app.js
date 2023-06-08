const close = document.getElementById('close');
const open = document.getElementById('open');
const mobileNav = document.querySelector('.mobile');

open.addEventListener('click', () => {
	// console.log('open');
	mobileNav.classList.add('show-nav');
});

close.addEventListener('click', () => {
	// console.log('close');
	mobileNav.classList.remove('show-nav');
});

// open.addEventlistener('cl')

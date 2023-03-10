const header = document.querySelector('#header')

window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll() {

	let scrollPos = window.scrollY;

	if(scrollPos > 0) {
		header.classList.add('shadow');
	} else {
		header.classList.remove('shadow');
	}
}

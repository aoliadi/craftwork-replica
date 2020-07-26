console.log('it works');

const navElems = document.getElementById('mobile-nav-js');
const hamburgerBtn = document.getElementById('hamburger-js');
hamburgerBtn.addEventListener('click', showNavElements);

function showNavElements() {
    console.log('clicked');
    navElems.classList.toggle('hide');
}

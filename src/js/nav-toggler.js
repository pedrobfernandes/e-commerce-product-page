// Takes care of the navigation menu and overlay

const toggleNavButton = document.getElementById('toggle-nav-button');
const navLinksContainer = document.getElementById('nav-links-container');
const closeNavButton = document.getElementById('close-nav-button');
const overlay = document.getElementById('overlay');


toggleNavButton.addEventListener('click', () =>
{
    navLinksContainer.classList.add('show');
    overlay.classList.add('show');
});

const closeMenu = () =>
{
    navLinksContainer.classList.remove('show');
    overlay.classList.remove('show');
};

closeNavButton.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

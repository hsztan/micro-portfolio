const mainMenu = document.querySelector('#main-menu');
const popUpMenu = document.querySelector('#popup-menu');
const hamburger = document.querySelector('.sandwich');
const menuItem = document.querySelectorAll('.popup-list-item');
const header = document.querySelector('header');
const close = document.querySelector('.close-icon');

const clickHamburger = () => {
  header.style.cssText = 'height: 100vh; background-color: #3c3a39;';
  mainMenu.style.display = 'none';
  mainMenu.style.position = 'static';
  popUpMenu.style.display = 'block';
};

hamburger.addEventListener('click', clickHamburger);

function resetMenu() {
  header.style.cssText = 'height: 72px; background-color: #3c3a39;';
  mainMenu.style.display = 'flex';
  popUpMenu.style.display = 'none';
}
close.addEventListener('click', resetMenu);

menuItem.forEach((item) => {
  item.addEventListener('click', resetMenu);
});

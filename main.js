const mainMenu = document.querySelector('#main-menu');
const popUpMenu = document.querySelector('#popup-menu');
const toggler = document.querySelector('.sandwich');
const header = document.querySelector('header');
const close = document.querySelector('.close-icon');

const clickToggler = () => {
  header.style.cssText = 'height: 100vh; background-color: #3c3a39;';
  mainMenu.style.display = 'none';
  mainMenu.style.position = 'static';
  popUpMenu.style.display = 'block';
};

toggler.addEventListener('click', clickToggler);

close.addEventListener('click', () => {
  header.style.cssText = 'height: 72px; background-color: #3c3a39;';
  mainMenu.style.display = 'flex';
  popUpMenu.style.display = 'none';
});

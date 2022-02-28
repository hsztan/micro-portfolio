const mainMenu = document.querySelector('#main-menu')
const popUpMenu = document.querySelector('#popup-menu')
const toggler = document.querySelector('.sandwich')
const header = document.querySelector('header')

const clickToggler = (e) => {
  header.style.cssText = 'height: 100vh; background-color: #3c3a39;'
  mainMenu.style.display = 'none'
  mainMenu.style.position = 'static'
  popUpMenu.style.display = 'block'
}

toggler.addEventListener('click', clickToggler)

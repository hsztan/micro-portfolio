const mainMenu = document.querySelector('#main-menu')
const popUpMenu = document.querySelector('#popup-menu')
const sandwich = document.querySelector('.sandwich')
const header = document.querySelector('header')

const clickSandwich = (e) => {
  header.style.height = '100vh'
  mainMenu.style.display = 'none'
  mainMenu.style.position = 'static'
  popUpMenu.style.display = 'block'
}

sandwich.addEventListener('click', clickSandwich)

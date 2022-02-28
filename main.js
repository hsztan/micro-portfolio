const mainMenu = document.querySelector('#main-menu')
const popUpMenu = document.querySelector('#popup-menu')
const sandwich = document.querySelector('.sandwich')

const clickSandwich = (e) => {
  mainMenu.style.display = 'none'
  popUpMenu.style.display = 'block'
}

sandwich.addEventListener('click', clickSandwich)

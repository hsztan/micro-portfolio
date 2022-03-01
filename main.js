import works from './data.js';

const mainMenu = document.querySelector('#main-menu');
const popUpMenu = document.querySelector('#popup-menu');
const hamburger = document.querySelector('.sandwich');
const menuItem = document.querySelectorAll('.popup-list-item');
const header = document.querySelector('header');
const close = document.querySelector('.close-icon');

const clickHamburger = () => {
  document.body.style.overflowY = 'hidden';
  header.style.cssText = 'height: 100vh; background-color: #3c3a39;';
  mainMenu.style.display = 'none';
  mainMenu.style.position = 'static';
  popUpMenu.style.display = 'block';
};

hamburger.addEventListener('click', clickHamburger);

function resetMenu() {
  document.body.style.overflowY = 'visible';
  header.style.cssText = 'height: 72px; background-color: #3c3a39;';
  mainMenu.style.display = 'flex';
  popUpMenu.style.display = 'none';
}
close.addEventListener('click', resetMenu);

menuItem.forEach((item) => {
  item.addEventListener('click', resetMenu);
});

// Mobile-menu ends here

// Getting reference
const featuredWork = document.querySelector('#featured-work');
const cardsWrapper = document.querySelector('.cards-wrapper');

// Featured Work
let ulItems = '';
works[0].technologies.forEach((tech) => { ulItems += `<li><a href="#">${tech}</a></li>`; });
featuredWork.innerHTML = `
        <div class="title">
          <h2>My Recent Works</h2>
          <div class="separator"></div>
        </div>
        <div class="featured">
          <div class="image">
            <img
              src=${works[0].featuredImage}
              alt="featured work"
            />
          </div>
          <div class="content">
            <h3>${works[0].name}</h3>
            <p>${works[0].description}</p>
            <ul class="tags">
             ${ulItems}
            </ul>
            <button class="btn btn-main" type="button">See Project</button>
          </div>
        </div>
`;

// Works cards
for (let i = 1; i < works.length; i += 1) {
  let ulItems = '';
  works[i].technologies.forEach((tech) => { ulItems += `<li><a href="#">${tech}</a></li>`; });
  const cardDiv = document.createElement('div');
  cardDiv.innerHTML = `
  <div class="card card-${i}" data-work="${i}">
    <div class="content">
      <h4 class="title">${works[i].name}</h4>
      <p class="summary">${works[i].description}</p>
      <ul class="tags">
        ${ulItems}
      </ul>
    </div>
    <button class="btn btn-main" type="button" data-work="${i}>See Project</button>
  </div>
`;
  cardsWrapper.appendChild(cardDiv);
  const currentCard = document.querySelector(`.card.card-${i}`);
  currentCard.style.background = ` linear-gradient(
    180.45deg,
    rgba(38, 38, 38, 0) 0.75%,
    rgba(38, 38, 38, 0.9) 84.18%
  ),
  url('${works[i].featuredImage}')`;
}

// On card mouse enter
for (let i = 1; i < works.length; i += 1) {
  const currentCard = document.querySelector(`.card-${i}`);
  currentCard.addEventListener('mouseenter', () => {
    currentCard.style.background = `url(${works[i].featuredImage})`;
  });
}

// On card mouse leave
for (let i = 1; i < works.length; i += 1) {
  const currentCard = document.querySelector(`.card-${i}`);
  currentCard.addEventListener('mouseleave', () => {
    currentCard.style.background = ` linear-gradient(
      180.45deg,
      rgba(38, 38, 38, 0) 0.75%,
      rgba(38, 38, 38, 0.9) 84.18%
    ),
    url('${works[i].featuredImage}')`;
  });
}
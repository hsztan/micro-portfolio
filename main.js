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
works[0].technologies.forEach((tech) => {
  ulItems += `<li><a href="#">${tech}</a></li>`;
});
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
            <button id="work-btn" class="btn btn-main" type="button" data-work="${0}">See Project</button>
          </div>
        </div>
`;

// Works cards
for (let i = 1; i < works.length; i += 1) {
  let ulItems = '';
  works[i].technologies.forEach((tech) => {
    ulItems += `<li><a href="#">${tech}</a></li>`;
  });
  const cardDiv = document.createElement('div');
  cardDiv.innerHTML = `
  <div class="card card-${i}">
    <div class="content">
      <h4 class="title">${works[i].name}</h4>
      <p class="summary">${works[i].description}</p>
      <ul class="tags">
        ${ulItems}
      </ul>
    </div>
    <button id="work-btn" class="btn btn-main" type="button" data-work="${i}">See Project</button>
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

//

const workButtons = document.querySelectorAll('#work-btn');

const createModal = (i) => {
  let techString = '';
  works[i].technologies.forEach((tech) => {
    techString += `<li><a href="">${tech}</a></li>`;
  });

  const modal = `
  <div class="modal-content">
          <div class="modal-title">
            <h2>${works[i].name}</h2>
            <div id="close-works-modal">
              <img
                src="./assets/icons/close-popup-menu.png"
                alt="close modal"
              />
            </div>
          </div>
          <ul class="tech-tags">${techString}</ul>
          <div class="modal-main">
            <div class="modal-img">
              <img src="${works[i].featuredImage}" alt="work" />
            </div>
            <div class="modal-info">
              <div class="modal-right">
                <p>${works[i].description}</p>
                <div class="modal-btns">
                  <button id="btn-1" class="btn btn-main" type="button">
                  <a href="${works[i].urlLive}" class="modal-links">
                  <span>
                    See Live
                  </span>
                  <img
                    class="icon"
                    src="./assets/icons/see-live.png"
                    alt="see live"
                /></a>
                  </button>
                  <button id="btn-2" class="btn btn-main" type="button">
                  <a href="${works[i].urlRepo}" class="modal-links">
                  <span>
                    See Source
                  </span>
                  <img
                    class="icon"
                    src="./assets/icons/github-modal.png"
                    alt="see source"
                /></a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;
  return modal;
};

const displayModal = (event) => {
  const modalSection = document.querySelector('#work-modal');
  const index = event.target.dataset.work;
  const workModal = createModal(index);
  modalSection.innerHTML = workModal;
  modalSection.style.display = 'block';
  const closeModalBtn = document.querySelector('#close-works-modal');
  closeModalBtn.addEventListener('click', () => {
    modalSection.style.display = 'none';
  });
  document.body.addEventListener('click', (e) => {
    if (e.target.id === 'work-modal') {
      modalSection.style.display = 'none';
    }
  });
};

workButtons.forEach((btn) => {
  btn.addEventListener('click', displayModal);
});

// Validate email input in form

const validateEmail = (inputElement) => {
  const username = inputElement.value.split('@')[0];
  const emailRegex = /^[a-z]+$/;
  return emailRegex.test(username);
};

const showMessage = (message, element) => {
  element.innerText = message;
};

// Disable hidden required fields in order to submit
const toggleDisableFields = () => {
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const fullName = document.querySelector('#name');
  if (window.innerWidth <= 992) {
    firstName.setAttribute('disabled', true);
    lastName.setAttribute('disabled', true);
    fullName.removeAttribute('disabled');
  } else {
    firstName.removeAttribute('disabled');
    lastName.removeAttribute('disabled');
    fullName.setAttribute('disabled', true);
  }
};

// In order to disable the hidden fields
window.addEventListener('resize', toggleDisableFields);
window.addEventListener('load', toggleDisableFields);

document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = document.querySelector('#email');
  const isValid = validateEmail(emailInput);
  if (!isValid) {
    const msgErrorOut = document.querySelector('#email').parentNode.querySelector('small');
    showMessage('This is an error', msgErrorOut);
    return false;
  }
  return true;
});
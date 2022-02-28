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
const btn = document.querySelectorAll('.btn');
const featuredWork = document.querySelector('#featured-work');
const cardsWrapper = document.querySelector('.cards-wrapper');

featuredWork.innerHTML = `
        <div class="title">
          <h2>My Recent Works</h2>
          <div class="separator"></div>
        </div>
        <div class="featured">
          <div class="image">
            <img
              src="./assets/images/featured-placeholder.png"
              alt="featured work"
            />
          </div>
          <div class="content">
            <h3>Multi-Post Stories</h3>
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a standard
              dummy text.
            </p>
            <ul class="tags">
              <li><a href="#">css</a></li>
              <li><a href="#">html</a></li>
              <li><a href="#">bootstrap</a></li>
              <li><a href="#">Ruby</a></li>
            </ul>
            <button class="btn btn-main" type="button">See Project</button>
          </div>
        </div>
`;
for (let i = 1; i < works.length; i += 1) {

}
cardsWrapper.innerHTML = `
          <div class="card">
            <div class="content">
              <h4 class="title">Profesional Art Printing Data More</h4>
              <p class="summary">
                A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard
              </p>
              <ul class="tags">
                <li><a href="#">html</a></li>
                <li><a href="#">bootstrap</a></li>
                <li><a href="#">Ruby</a></li>
              </ul>
            </div>
            <button class="btn btn-main" type="button">See Project</button>
          </div>
`;

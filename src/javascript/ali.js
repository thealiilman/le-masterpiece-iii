const nav = document.querySelector('.nav-container');
const menu = document.querySelector('.menu');
const navLinksContainer = document.querySelector('.nav-links-container');
const navLinks = document.querySelectorAll('.nav-links-container')

const aboutLink = document.getElementById('about');
const portfolioLink = document.getElementById('portfolio');

const aboutContainer = document.querySelector('.about-container');
const portfolioContainer = document.querySelector('.portfolio-container');

let isBodyBelowZero;

// Helpers
const toggleAttribute = (elem, attr, one, two) => {
  const elemDataAttribute = elem.getAttribute(attr);
  elem.setAttribute(attr, elemDataAttribute === one ? two : one);
};

const scrollTo = elem => {
  window.scroll({
    behavior: 'smooth',
    top: elem.offsetTop - 88,
  });
}

// Events
window.addEventListener('scroll', () => {
  isBodyBelowZero = document.body.getBoundingClientRect().top < 0;

  if (isBodyBelowZero) {
    nav.setAttribute('data-position', 'below-zero');
  } else {
    nav.setAttribute('data-position', 'at-zero');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    nav.setAttribute('data-menu-opened', 'no');
  }
});

menu.addEventListener('click', () => {
  toggleAttribute(nav, 'data-menu-opened', 'no', 'yes');
});

navLinksContainer.addEventListener('click', () => {
  nav.setAttribute('data-menu-opened', 'no');
});

aboutLink.addEventListener('click', e => {
  e.preventDefault();
  scrollTo(aboutContainer);
});

portfolioLink.addEventListener('click', e => {
  e.preventDefault();
  scrollTo(portfolioContainer);
});

const nav = document.querySelector('.nav-container');
const menu = document.querySelector('.menu');
const navLinksContainer = document.querySelector('.nav-links-container');
const navLinks = document.querySelectorAll('.nav-links-container')

const aboutLink = document.getElementById('about');
const portfolioLink = document.getElementById('portfolio');
const contactLink = document.getElementById('contact');

const aboutContainer = document.querySelector('.about-container');
const portfolioContainer = document.querySelector('.portfolio-container');
const contactContainer = document.querySelector('.contact-container');

const sendButton = document.getElementById('formButton');
const formMessage = document.querySelector('.form-message');

const name = document.getElementById('formName');
const email = document.getElementById('formEmail');
const subject = document.getElementById('formSubject');
const message = document.getElementById('formMessage');

const NAVBAR_HEIGHT = 88;

// Helpers
const toggleAttribute = (elem, attr, one, two) => {
  const elemDataAttribute = elem.getAttribute(attr);
  elem.setAttribute(attr, elemDataAttribute === one ? two : one);
};

const scrollTo = elem => {
  window.scroll({
    behavior: 'smooth',
    top: elem.offsetTop - NAVBAR_HEIGHT,
  });
}

// Events
window.addEventListener('scroll', () => {
  const isBodyBelowZero = document.body.getBoundingClientRect().top < 0;

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

aboutLink.addEventListener('click', () => scrollTo(aboutContainer));

portfolioLink.addEventListener('click', () => scrollTo(portfolioContainer));

contactLink.addEventListener('click', () => scrollTo(contactContainer));

sendButton.addEventListener('click', e => {
  e.preventDefault();

  if (name.value === "" || email.value === "" || subject.value === "" || message.value === "") {
    formMessage.setAttribute('data-message', 'error');
    formMessage.textContent = "Please fill in the form.";
  } else {
    formMessage.textContent = "";

    const url = 'http://ali-ilman.com/form.php';
    const options = {
      method: "POST",
      body: new FormData(document.getElementById("contactForm"))
    };

    fetch(url, options)
      .then(response => {
        if (response.status === 200) {
          formMessage.setAttribute('data-message', 'success');
          formMessage.textContent = "Email has been sent! Ali will get back to you shortly.";
        }
      })
      .catch(e => {
        formMessage.setAttribute('data-message', 'error');
        formMessage.textContent = "An error has occured.";
        console.log(e);
      });

    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  }
});

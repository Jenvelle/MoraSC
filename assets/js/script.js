const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);






// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}


// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}
// =============== MENU MOBILE ================== //
const navMenu = document.getElementById('menu-mobile')

function toggleMenu() {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

navMenu.addEventListener('click', toggleMenu)

// =========== REMOVE MENU MOBILE ============= //
const navLink = document.querySelectorAll('nav ul li a')

for (const link of navLink) {
  link.addEventListener('click', function () {
    nav.classList.remove('active')
  })
}

// =============== DARK MODE ================== //
const toggle = document.getElementById('btn')

toggle.addEventListener('click', () => {
  if (toggle) {
    document.body.classList.toggle('sun-theme')
  } else {
    document.body.classList.remove('sun-theme')
  }
})

// ===============  FAQ ================== //
const faq = document.getElementsByClassName('faq-page')
let i
for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener('click', function () {
    this.classList.toggle('active')
    const body = this.nextElementSibling
    if (body.style.display === 'block') {
      body.style.display = 'none'
    } else {
      body.style.display = 'block'
    }
  })
}

// =============== BUY MORE ================== //
let card = document.querySelectorAll('.button-buy')

card.forEach(event => {
  event.addEventListener('click', () => {
    if (event.classList.contains('active')) {
      event.classList.remove('active')
    } else {
      event.classList.add('active')
    }
  })
})


// =============== SCROLL REVEAL  ================== //

// ========== SCROLL TOP  ========= //
const scrollTop = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000
})

scrollTop.reveal('.delaySmall', { delay: 300 })
scrollTop.reveal('.delayMedium', { delay: 500 })
scrollTop.reveal('.delayLarge', { delay: 700 })
scrollTop.reveal('.delayLargeTopExtra', { delay: 900 })


// ========== SCROLL BOTTOM  ========= //
const scrollBottom = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 2200
})

scrollBottom.reveal('.delaySmallBottom', { delay: 300 })
scrollBottom.reveal('.delayMediumBottom', { delay: 500 })
scrollBottom.reveal('.delayLargeBottom', { delay: 700 })
scrollBottom.reveal('.delayLargeBottomExtra', { delay: 900 })


// ========== SCROLL LEFT  ========= //
const scrollLeft = ScrollReveal({
  origin: 'left',
  distance: '50px',
  duration: 2000
})

scrollLeft.reveal('.home-data-img, .sony-left, .about-img, .contact-button, .form-left, .control-about-2', { delay: 550 })


// ========== SCROLL RIGHT  ========= //
const scrollRight = ScrollReveal({
  origin: 'left',
  distance: '-20px',
  duration: 2200
})

scrollRight.reveal('.sony-right, .about-data, .contact-title, .form-right, .data-2', { delay: 550 })


// ========== BUTTON SCROLL TOP  ========= //
const backTopButton = document.querySelector('.scrollup')
function backToTop() {
  if (window.scrollY >= 550) {
    backTopButton.classList.add('show')
  } else {
    backTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function(){
  backToTop()
})


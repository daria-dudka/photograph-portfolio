import i18Obj from "./translate.js";

// mobile menu
const burgerBtn = document.querySelector(".burger-btn");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const main = document.querySelector(".main");
const body = document.querySelector("body");

function bodyOverflow() {
  if (burgerBtn.classList.contains("--active")) {
    body.style.overflowY = "hidden";
    body.style.height = `${nav.scrollHeight}px`;
  } else {
    body.style.overflowY = "auto";
    body.style.height = "100%";
  }
}

function toggleMenu() {
  burgerBtn.classList.toggle("--active");
  header.classList.toggle("--active");
  main.classList.toggle("--active");
  bodyOverflow();
}

function closeMenu(event) {
  if (event.target.classList.contains("nav__link")) {
    burgerBtn.classList.remove("--active");
    header.classList.remove("--active");
    main.classList.remove("--active");
  }
  bodyOverflow();
}

burgerBtn.addEventListener("click", toggleMenu);
nav.addEventListener("click", closeMenu);

// change portfolio images
const portfolioBtns = document.querySelector(".portfolio__buttons");
const portfolioBtn = document.querySelectorAll(".portfolio__btn");
const portfolioImages = document.querySelectorAll(".portfolio__img");

function changeImage(event) {
  if (event.target.classList.contains("portfolio__btn")) {
    portfolioBtn.forEach((el) => {
      el.classList.remove("--active");
      el.classList.add("--inactive");
    });
    event.target.classList.remove("--inactive");
    event.target.classList.add("--active");
    portfolioImages.forEach(
      (img, index) =>
        (img.src = `./assets/img/${event.target.dataset.season}/${
          index + 1
        }.jpg`)
    );
  }
}

portfolioBtns.addEventListener("click", changeImage);

// change the language
const switchLanguage = document.querySelectorAll(".lang__switch");

switchLanguage.forEach((el) => {
  el.addEventListener("click", (event) => {
    switchLanguage.forEach((el) => el.classList.remove("--active"));
    getTranslation(event.target, event.target.dataset.language);
  });
});

function getTranslation(targetElement, language) {
  let translationElements = document.querySelectorAll("[data-i18n]");
  translationElements.forEach((el) => {
    if (el.placeholder) {
      el.placeholder = i18Obj[language][el.dataset.i18n];
    } else {
      el.textContent = i18Obj[language][el.dataset.i18n];
    }
  });
  targetElement.classList.add("--active");
}

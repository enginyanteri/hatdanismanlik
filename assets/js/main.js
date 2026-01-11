/* =========================
   MOBILE MENU (HAMBURGER)
========================= */

// Hamburger butonu
const hamburger = document.getElementById("hamburger");

// Navbar içindeki link listesi
const navLinks = document
  .getElementById("navbar")
  .querySelector(".nav-links");

// Hamburger tıklanınca menüyü aç / kapa
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


/* =========================
   HEADER SCROLL EFFECT
========================= */

// Sabit üst bar
const header = document.querySelector(".top-bar");

/*
  Sayfa scroll edildiğinde:
  - Yukarıdaysak: header transparan kalır
  - Aşağı indikçe: scrolled class'ı eklenir
*/
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

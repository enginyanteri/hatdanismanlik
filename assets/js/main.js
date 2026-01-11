/* =========================
   MOBILE MENU (HAMBURGER)
========================= */

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const navLinks = navbar?.querySelector(".nav-links");

// Güvenli kontrol (ileride HTML değişirse JS patlamaz)
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* =========================
   HEADER SCROLL EFFECT
========================= */

const header = document.querySelector(".top-bar");

if (header) {
  window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 10;

    header.classList.toggle("scrolled", isScrolled);
  });
}

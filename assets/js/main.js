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

/* =========================
   HERO → SERVICES SCROLL
========================= */

document.addEventListener("DOMContentLoaded", function () {

  const heroBtn = document.getElementById("heroScrollBtn");
  const servicesSection = document.getElementById("services");

  if (heroBtn && servicesSection) {

    heroBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const headerHeight = 100; // Sabit header yüksekliğin
      const targetPosition = servicesSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

    });

  }

});

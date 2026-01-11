const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navbar").querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// Header scroll efekti
const header = document.querySelector('.top-bar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

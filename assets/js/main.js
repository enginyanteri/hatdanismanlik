const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navbar").querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

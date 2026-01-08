const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const submenu = document.querySelector('.submenu');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

dropdownToggle.addEventListener('click', () => {
  submenu.classList.toggle('show');
});

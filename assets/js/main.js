// ================================
// HAMBURGER MENÜ (MOBİL)
// ================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ================================
// KURUMSAL DROPDOWN (DESKTOP VE MOBİL)
// ================================
const dropdownToggle = document.querySelector('.dropdown-toggle');
const submenu = document.querySelector('.submenu');

// Desktop hover ile açma (CSS zaten yapıyor)

// Mobil tıklama için:
dropdownToggle.addEventListener('click', () => {
  submenu.classList.toggle('show');
});

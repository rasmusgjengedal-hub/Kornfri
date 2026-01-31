// Select elements
const hamburger = document.querySelector('.hamburger');
const navCenter = document.querySelector('.nav-center');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  navCenter.classList.toggle('active');
});

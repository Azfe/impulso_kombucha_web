document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});

// JavaScript para manejar el scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.impulso-navbar');
  const logoContainer = document.querySelector('.impulso-logo-container');
  const logo = document.querySelector('.impulso-logo');
  const pinya1 = document.querySelector('.img-pinya');
  const pinya2 = document.querySelector('.img-pinya-2');

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    logoContainer.classList.add('scrolled');
    logo.classList.add('scrolled');
    pinya1.classList.add('scrolled');
    pinya2.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
    logoContainer.classList.remove('scrolled');
    logo.classList.remove('scrolled');
    pinya1.classList.remove('scrolled');
    pinya2.classList.remove('scrolled');
  }
});
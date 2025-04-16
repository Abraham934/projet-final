// script.js

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});

// Affiche le bouton "Retour en haut" lorsque l'utilisateur fait défiler la page vers le bas
window.onscroll = function() {
  const button = document.getElementById('back-to-top');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = "block"; // Affiche le bouton
  } else {
    button.style.display = "none"; // Masque le bouton
  }
};

// Permet de faire défiler la page vers le haut lorsqu'on clique sur le bouton
document.getElementById('back-to-top').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

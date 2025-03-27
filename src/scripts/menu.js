// src/scripts/menu.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    if (toggleButton && mobileMenu) {
      toggleButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  });
  
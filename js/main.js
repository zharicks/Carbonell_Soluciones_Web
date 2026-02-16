/**
 * Carbonell Soluciones - Script principal
 * Comportamiento global: menú móvil, scroll suave, etc.
 */

(function () {
  'use strict';

  // Menú móvil (cuando se implemente el toggle)
  document.querySelectorAll('[data-menu-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var nav = document.querySelector('[data-nav-mobile]');
      if (nav) nav.classList.toggle('hidden');
    });
  });
})();

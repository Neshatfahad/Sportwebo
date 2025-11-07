// SportSphere Interactions
(function() {
  'use strict';

  // Smooth scrolling for internal nav links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        if (window.innerWidth < 860) {
          navMenu.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('open');
    });
  }

  // Contact form submission
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = (form.querySelector('#name') || {}).value || 'Friend';
      alert(`Thank you, ${name}! Your message has been received.`);
      form.reset();
    });
  }

  // Optional: Enhance focus outline for keyboard users
  function handleFirstTab(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  window.addEventListener('keydown', handleFirstTab);
})();

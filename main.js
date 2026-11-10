'use strict';

// Keep the footer year current without changing the page's semantic structure.
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

// This demo confirms valid form input locally. Connect a backend to deliver messages.
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const status = document.querySelector('#form-status');
    status.textContent = 'Thank you! Your form is valid. This demo does not send messages yet.';
    contactForm.reset();
  });
}

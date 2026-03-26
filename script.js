const actionButton = document.getElementById('actionButton');
const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('feedback');

actionButton.addEventListener('click', () => {
  feedback.textContent = '👍 Bouton action cliqué. Super !';
  feedback.classList.remove('hidden');
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  feedback.textContent = `Merci ${name} ! Ton message a bien été reçu (factice).`;
  feedback.classList.remove('hidden');

  contactForm.reset();
});
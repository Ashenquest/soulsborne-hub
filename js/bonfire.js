// bonfire.js - Handles clickable bonfire animation

document.addEventListener('DOMContentLoaded', () => {
  const bonfire = document.querySelector('.bonfire');

  if (!bonfire) return;

  bonfire.addEventListener('click', () => {
    bonfire.classList.toggle('active');

    // Optional visual effect
    bonfire.style.filter = bonfire.classList.contains('active')
      ? 'brightness(1.5)'
      : 'brightness(1)';
  });
});
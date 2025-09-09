// cardsToggle.js - Smooth slide toggle for all sections
document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-details');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const details = button.nextElementSibling;

      if (details.classList.contains('show-details')) {
        // Hide details
        details.classList.remove('show-details');
        button.textContent = 'Show Details';
      } else {
        // Show details
        details.classList.add('show-details');
        button.textContent = 'Hide Details';
      }
    });
  });
});

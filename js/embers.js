document.addEventListener("DOMContentLoaded", () => {
  const emberContainer = document.querySelector(".embers");

  function createEmber() {
    const ember = document.createElement("div");
    ember.classList.add("ember");

    // Random size (2px to 8px)
    const size = Math.random() * 6 + 2;
    ember.style.width = `${size}px`;
    ember.style.height = `${size}px`;

    // Random horizontal position
    ember.style.left = `${Math.random() * 100}%`;

    // Random animation duration (4s to 10s)
    ember.style.animationDuration = `${Math.random() * 6 + 4}s`;

    // Random glow effect
    ember.style.filter = `drop-shadow(0 0 ${Math.random() * 20 + 5}px orange)`;

    emberContainer.appendChild(ember);

    // Remove ember after animation
    setTimeout(() => {
      ember.remove();
    }, 10000);
  }

  // Spawn new ember every 300ms
  setInterval(createEmber, 300);
});

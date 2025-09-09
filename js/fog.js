document.addEventListener("DOMContentLoaded", () => {
  const fogContainer = document.querySelector(".fog");

  function createFog() {
    const fog = document.createElement("div");
    fog.classList.add("fog-particle");

    // Random size (big patches of fog)
    const size = Math.random() * 200 + 200; // 200px–400px
    fog.style.width = `${size}px`;
    fog.style.height = `${size}px`;

    // Random horizontal starting position
    fog.style.left = `${Math.random() * 100}%`;

    // Start slightly off screen bottom
    fog.style.bottom = `-100px`;

    // Random animation duration (30s–60s)
    fog.style.animationDuration = `${Math.random() * 30 + 30}s`;

    // Random opacity (subtle fog variation)
    fog.style.opacity = Math.random() * 0.2 + 0.05;

    fogContainer.appendChild(fog);

    // Remove fog after animation
    setTimeout(() => {
      fog.remove();
    }, 60000);
  }

  // Spawn fog particles every 5s
  setInterval(createFog, 5000);

  // Start with a few
  for (let i = 0; i < 3; i++) {
    createFog();
  }
});

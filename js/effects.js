document.addEventListener("DOMContentLoaded", () => {
  const emberContainer = document.querySelector(".embers");
  const fogContainer = document.querySelector(".fog");
  const toggleButton = document.getElementById("toggle-effects");

  let effectsEnabled = localStorage.getItem("effectsEnabled") !== "false";
  const maxEmbers = 50;
  const maxFog = 10;
  const embers = [];
  const fogs = [];

  /* ---------------- EMBERS ---------------- */
  function initEmbers() {
    for (let i = 0; i < maxEmbers; i++) {
      const ember = document.createElement("div");
      ember.classList.add("ember");
      ember.style.width = `${Math.random() * 6 + 2}px`;
      ember.style.height = `${Math.random() * 6 + 2}px`;
      ember.style.left = `${Math.random() * 100}%`;
      ember.style.bottom = `${Math.random() * 100}%`;
      ember.style.opacity = Math.random() * 0.9 + 0.1;
      emberContainer.appendChild(ember);
      embers.push({
        el: ember,
        speed: Math.random() * 0.5 + 0.2,
        drift: (Math.random() - 0.5) * 0.3
      });
    }
  }

  function updateEmbers() {
    if (!effectsEnabled) return;
    embers.forEach(ember => {
      let bottom = parseFloat(ember.el.style.bottom);
      let left = parseFloat(ember.el.style.left);
      bottom += ember.speed;
      left += ember.drift;
      if (bottom > 100) bottom = -5;
      if (left < 0) left = 100;
      if (left > 100) left = 0;
      ember.el.style.bottom = `${bottom}%`;
      ember.el.style.left = `${left}%`;
    });
  }

  /* ---------------- FOG ---------------- */
  function initFog() {
    for (let i = 0; i < maxFog; i++) {
      const fog = document.createElement("div");
      fog.classList.add("fog-particle");
      const size = Math.random() * 150 + 150;
      fog.style.width = `${size}px`;
      fog.style.height = `${size}px`;
      fog.style.left = `${Math.random() * 100}%`;
      fog.style.bottom = `${Math.random() * 100 - 50}%`;
      fog.style.opacity = Math.random() * 0.15 + 0.05;
      fogContainer.appendChild(fog);
      fogs.push({
        el: fog,
        speed: Math.random() * 0.05 + 0.01,
        drift: (Math.random() - 0.5) * 0.02
      });
    }
  }

  function updateFog() {
    if (!effectsEnabled) return;
    fogs.forEach(fog => {
      let bottom = parseFloat(fog.el.style.bottom);
      let left = parseFloat(fog.el.style.left);
      bottom += fog.speed;
      left += fog.drift;
      if (bottom > 100) bottom = -50;
      if (left < 0) left = 100;
      if (left > 100) left = 0;
      fog.el.style.bottom = `${bottom}%`;
      fog.el.style.left = `${left}%`;
    });
  }

  /* ---------------- ANIMATION LOOP ---------------- */
  function animate() {
    if (effectsEnabled) {
      updateEmbers();
      updateFog();
    }
    requestAnimationFrame(animate);
  }

  /* ---------------- TOGGLE LOGIC ---------------- */
  function startEffects() {
    effectsEnabled = true;
    localStorage.setItem("effectsEnabled", "true");
    toggleButton.textContent = "Disable Effects";
  }

  function stopEffects() {
    effectsEnabled = false;
    localStorage.setItem("effectsEnabled", "false");
    toggleButton.textContent = "Enable Effects";
  }

  toggleButton.addEventListener("click", () => {
    effectsEnabled ? stopEffects() : startEffects();
  });

  /* ---------------- INIT ---------------- */
  initEmbers();
  initFog();
  animate();

  if (!effectsEnabled) stopEffects();
});

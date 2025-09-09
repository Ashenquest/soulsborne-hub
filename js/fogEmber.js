// Fog and Ember Animation
const fog = document.querySelector('.fog');
const embers = document.querySelector('.embers');

let fogPos = 0;
let emberPos = 0;

function animateFogEmbers() {
  fogPos += 0.2; // slow horizontal movement
  emberPos += 0.5; // faster horizontal movement

  fog.style.backgroundPosition = `${fogPos}px 0`;
  embers.style.backgroundPosition = `${emberPos}px 0`;

  requestAnimationFrame(animateFogEmbers);
}

animateFogEmbers();

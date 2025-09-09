const music = document.getElementById('bg-music');
const btn = document.getElementById('music-toggle');

btn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    btn.textContent = 'Pause Music';
  } else {
    music.pause();
    btn.textContent = 'Play Music';
  }
});

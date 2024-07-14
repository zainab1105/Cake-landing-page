// script.js

document.addEventListener('DOMContentLoaded', (event) => {
  const toggleButton = document.getElementById('toggle-button');
  const toggleIcon = document.getElementById('toggle-icon');
  const body = document.body;
  const modeText = document.getElementById('mode');

  // Check for saved mode in localStorage
  const savedMode = localStorage.getItem('mode');
  if (savedMode) {
      body.classList.remove('day-mode', 'night-mode');
      body.classList.add(savedMode);
      modeText.textContent = savedMode === 'day-mode' ? 'Day' : 'Night';
      toggleIcon.className = savedMode === 'day-mode' ? 'fas fa-sun' : 'fas fa-moon';
  }

  toggleButton.addEventListener('click', () => {
      if (body.classList.contains('day-mode')) {
          body.classList.remove('day-mode');
          body.classList.add('night-mode');
          modeText.textContent = 'Night';
          toggleIcon.className = 'fas fa-moon';
          localStorage.setItem('mode', 'night-mode');
      } else {
          body.classList.remove('night-mode');
          body.classList.add('day-mode');
          modeText.textContent = 'Day';
          toggleIcon.className = 'fas fa-sun';
          localStorage.setItem('mode', 'day-mode');
      }
  });
});

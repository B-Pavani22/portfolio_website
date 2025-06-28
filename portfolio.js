const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = 'Switch to Light Mode';
  } else {
    toggleBtn.textContent = 'Switch to Dark Mode';
  }
});
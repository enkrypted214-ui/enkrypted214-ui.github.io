function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  document.getElementById('icon-sun').style.display = theme === 'light' ? 'block' : 'none';
  document.getElementById('icon-moon').style.display = theme === 'dark' ? 'block' : 'none';
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
}
applyTheme(localStorage.getItem('theme') || 'dark');

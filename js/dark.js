const toggleBtn = document.getElementById('theme-toggle');
const root = document.body;

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.remove("dark-mode");
}

  // Appliquer le mode au chargement
  function applySavedTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      root.classList.add('dark-mode');
      toggleBtn.textContent = '☀️ Mode clair';
    } else {
      root.classList.remove('dark-mode');
      toggleBtn.textContent = '🌙 Mode sombre';
    }
  }

  // Toggle et sauvegarde
  toggleBtn.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleBtn.textContent = isDark ? '☀️ Mode clair' : '🌙 Mode sombre';
  });

  // Appliquer au load
  applySavedTheme();
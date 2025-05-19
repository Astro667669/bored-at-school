const toggleBtn = document.getElementById('theme-toggle');
const root = document.body;
const root2 = document.getElementById('letter');
const links = document.getElementsByClassName('game-link');

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Appliquer automatiquement selon les préférences système
if (prefersDarkScheme.matches) {
  root.classList.add("dark-mode");
  root2?.classList.add("dark-mode");
  for (let link of links) {
    link.classList.add("dark-mode");
  }
} else {
  root.classList.remove("dark-mode");
  root2?.classList.remove("dark-mode");
  for (let link of links) {
    link.classList.remove("dark-mode");
  }
}

// Appliquer le thème sauvegardé au chargement
function applySavedTheme() {
  const theme = localStorage.getItem('theme');
  const isDark = theme === 'dark';

  root.classList.toggle('dark-mode', isDark);
  root2?.classList.toggle('dark-mode', isDark);
  for (let link of links) {
    link.classList.toggle('dark-mode', isDark);
  }

  toggleBtn.textContent = isDark ? '☀️ Mode clair' : '🌙 Mode sombre';
}

// Toggle et sauvegarde
toggleBtn.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark-mode');
  root2?.classList.toggle('dark-mode');
  for (let link of links) {
    link.classList.toggle('dark-mode');
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggleBtn.textContent = isDark ? '☀️ Mode clair' : '🌙 Mode sombre';
});

// Appliquer au load
applySavedTheme();

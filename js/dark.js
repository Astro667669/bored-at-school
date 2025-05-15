const toggleBtn = document.getElementById('theme-toggle');
const root = document.body;
const root2 = document.getElementById('letter'); // CORRECT

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Appliquer automatiquement selon les préférences système
if (prefersDarkScheme.matches) {
  root.classList.add("dark-mode");
  root2?.classList.add("dark-mode");
} else {
  root.classList.remove("dark-mode");
  root2?.classList.remove("dark-mode");
}

// Appliquer le thème sauvegardé au chargement
function applySavedTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    root.classList.add('dark-mode');
    root2?.classList.add('dark-mode');
    toggleBtn.textContent = '☀️ Mode clair';
  } else {
    root.classList.remove('dark-mode');
    root2?.classList.remove('dark-mode');
    toggleBtn.textContent = '🌙 Mode sombre';
  }
}

// Toggle et sauvegarde
toggleBtn.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark-mode');
  root2?.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggleBtn.textContent = isDark ? '☀️ Mode clair' : '🌙 Mode sombre';
});

// Appliquer au load
applySavedTheme();

 const toggleBtn = document.getElementById('theme-toggle');
  const root = document.body;

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
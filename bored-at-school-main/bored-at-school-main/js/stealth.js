
  // Crée l'élément d'overlay si pas présent
  let overlay = document.getElementById('fakeOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'fakeOverlay';
    document.body.appendChild(overlay);
  }

  // Style de base
  Object.assign(overlay.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: '9999',
    display: 'none',
    pointerEvents: 'none' // évite de bloquer les clics
  });

  // Récupère l'image si elle existe
  const savedImg = localStorage.getItem('stealthImage');
  if (savedImg) {
    overlay.style.backgroundImage = `url(${savedImg})`;
  }

  // Récupère la touche personnalisée
  const stealthKey = localStorage.getItem('stealthKey') || '7';

  // Toggle avec la touche définie ou Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'F9' || e.key === stealthKey) {
      overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    }
    if (e.key === 'Escape') {
      overlay.style.display = 'none';
    }
  });


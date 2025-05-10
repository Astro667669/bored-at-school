(() => {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.zIndex = '99999';
  overlay.style.backgroundSize = 'cover';
  overlay.style.backgroundPosition = 'center';
  overlay.style.display = 'none';
  overlay.id = 'stealthOverlay';
  document.body.appendChild(overlay);

  const imgURL = localStorage.getItem('stealthImage');
  if (imgURL) {
    overlay.style.backgroundImage = `url(${imgURL})`;
  }

  const storedKey = localStorage.getItem('stealthKey') || '7';

  document.addEventListener('keydown', (e) => {
    if (e.key === storedKey) {
      overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
    }
    if (e.key === 'Escape') {
      overlay.style.display = 'none';
    }
  });

  // expose method to update key
  window.setStealthKey = (key) => {
    localStorage.setItem('stealthKey', key);
  };
})();

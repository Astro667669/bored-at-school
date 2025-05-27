document.addEventListener('DOMContentLoaded', function () {
  let adblockDetected = false;

  // Attendre que la page ait bien fini de charger
  setTimeout(() => {
    const iframes = document.querySelectorAll('iframe');

    let found = false;

    iframes.forEach(iframe => {
      const src = iframe.getAttribute('src') || '';

      // On détecte les pubs en se basant sur des patterns "typiques"
      const isLikelyAd = (
        src.includes('invadedisheartentrail.com') ||  // domaine pub
        src.includes('/watch.') ||                    // pattern de tracking
        (iframe.width == "468" && iframe.height == "60") // dimensions classiques
      );

      if (isLikelyAd) {
        found = true;
      }
    });

    if (!found) {
      adblockDetected = true;
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        overlay.style.display = 'flex';
        overlay.style.flexDirection = 'column';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '999999';
        overlay.style.color = 'white';
        overlay.style.fontSize = '2rem';
        overlay.style.textAlign = 'center';
        overlay.style.padding = '20px';

        // Bloquer scroll
        document.body.style.overflow = 'hidden';

        // Empêcher toute interaction
        window.addEventListener('click', e => e.stopPropagation(), true);
        window.addEventListener('keydown', e => e.stopPropagation(), true);

        // Créer l'image
        const image = document.createElement('img');
        image.src = 'https://upload.wikimedia.org/wikipedia/commons/8/81/Stop_sign.png'; // 👉 Change l'URL ici
        image.style.maxWidth = '300px';
        image.style.marginBottom = '20px';
        image.alt = 'Image bloquante';

        // Créer le message
        const message = document.createElement('div');
        message.textContent = ' Merci de désactiver votre bloqueur de publicités, puis rafraîchis la page pour continuer.';

        // Ajouter les éléments à l’overlay
        overlay.appendChild(image);
        overlay.appendChild(message);
        document.body.appendChild(overlay);
    } else {
      console.log('✅ Iframe pub détectée');
    }
  }, 3000); // 3s pour laisser le temps de charger
});

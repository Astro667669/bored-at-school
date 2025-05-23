
document.addEventListener('DOMContentLoaded', function () {
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ip = data.ip;
      const ignoreIps = ['193.5.240.10']; // 🔁 Remplace ici par l'IP de ton école

      if (ignoreIps.includes(ip)) {
        console.log('🎉 IP autorisée, détection Adblock désactivée');
        return; // ⛔ On sort direct
      }

      // Détection Adblock (comme dans ton script original)
      let adblockDetected = false;

      setTimeout(() => {
        const iframes = document.querySelectorAll('iframe');
        let found = false;

        iframes.forEach(iframe => {
          const src = iframe.getAttribute('src') || '';
          const isLikelyAd = (
            src.includes('invadedisheartentrail.com') ||
            src.includes('/watch.') ||
            (iframe.width == "468" && iframe.height == "60")
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

          document.body.style.overflow = 'hidden';
          window.addEventListener('click', e => e.stopPropagation(), true);
          window.addEventListener('keydown', e => e.stopPropagation(), true);

          const image = document.createElement('img');
          image.src = 'https://upload.wikimedia.org/wikipedia/commons/8/81/Stop_sign.png';
          image.style.maxWidth = '300px';
          image.style.marginBottom = '20px';
          image.alt = 'Image bloquante';

          const message = document.createElement('div');
          message.textContent = 'Merci de désactiver votre bloqueur de publicités, puis rafraîchis la page pour continuer.';

          overlay.appendChild(image);
          overlay.appendChild(message);
          document.body.appendChild(overlay);
        } else {
          console.log('✅ Iframe pub détectée');
        }
      }, 3000);
    })
    .catch(err => {
      console.error('Erreur lors de la récupération de l\'IP :', err);
    });
});


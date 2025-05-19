



function detectAdBlock() {
    console.log("🔍 Vérification AdBlock...");

    // Méthode 1 : Vérifie si le leurre est masqué ou supprimé
    const ad = document.querySelector('.adsbox');
    const baitBlocked = !ad || ad.offsetHeight === 0;

    // Méthode 2 : Tente de charger un faux script pub
    const fakeScript = document.createElement('script');
    fakeScript.src = "/ads.js?v=" + Date.now();
    fakeScript.onerror = handleAdBlock;

    if (baitBlocked) {
        handleAdBlock();
    } else {
        document.body.appendChild(fakeScript);
    }
}

function handleAdBlock() {
    if (!sessionStorage.getItem("adblock_redirected")) {
        alert("🚫 AdBlock détecté ! Merci de le désactiver pour continuer.");
        sessionStorage.setItem("adblock_redirected", "true");
    }
}

window.addEventListener('load', () => setTimeout(detectAdBlock, 500));

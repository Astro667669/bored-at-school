


function detectAdBlock() {
    console.log("🔍 Vérification AdBlock...");

    // 1️⃣ Vérifie si l'élément leurre est masqué ou supprimé
    const ad = document.querySelector('.adsbox');
    const baitBlocked = !ad || getComputedStyle(ad).display === 'none' || ad.offsetHeight === 0;

    // 2️⃣ Prépare un faux script pub pour test de blocage JS
    const fakeScript = document.createElement('script');
    fakeScript.src = "/ads.js?v=" + Date.now();
    fakeScript.onerror = handleAdBlock;

    // Résultat
    if (baitBlocked) {
        handleAdBlock();
    } else {
        document.body.appendChild(fakeScript);
    }
}

function handleAdBlock() {
    if (!sessionStorage.getItem("adblock_redirected")) {
        sessionStorage.setItem("adblock_redirected", "true");
        alert("🚫 AdBlock détecté ! Merci de le désactiver pour continuer.");
        // Optionnel : redirection ou blocage
        // window.location.href = "/adblock-detected";
        // document.body.innerHTML = "<h1>Veuillez désactiver AdBlock pour continuer.</h1>";
    }
}

window.addEventListener('load', () => setTimeout(detectAdBlock, 300));


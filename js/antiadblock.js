function checkIfAdIsBlocked() {
    const adContainer = document.getElementById('atcontainer-C86E387157f60d5125b9bd69ed6b7980');

    // Vérifie si l'élément existe
    if (!adContainer) {
        adBlockedAction("🧱 Le conteneur publicitaire est supprimé.");
        return;
    }

    const style = window.getComputedStyle(adContainer);
    const isHidden = style.display === 'none' || style.visibility === 'hidden' || adContainer.offsetHeight === 0;

    if (isHidden) {
        adBlockedAction("🕵️‍♂️ Le conteneur publicitaire est masqué.");
    }
}

function adBlockedAction(message) {
    console.warn(message);
    alert("🚫 Publicité bloquée détectée ! Merci de désactiver AdBlock pour soutenir le site.");
    // Optionnel : bloquer ou rediriger
    // window.location.href = "/adblock-detected";
}

// Vérifie dès que la page est chargée, et régulièrement
window.addEventListener('load', () => {
    checkIfAdIsBlocked();
    setInterval(checkIfAdIsBlocked, 100); // toutes les 10 secondes
});
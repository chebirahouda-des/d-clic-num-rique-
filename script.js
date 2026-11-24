
// Attendre le chargement de la page
document.addEventListener("DOMContentLoaded", function() {

    // Récupérer le bouton principal
    const button = document.getElementById("startButton");

    // Récupérer la section des rubriques
    const categories = document.getElementById("categories");

    // Vérifier que les éléments existent
    if (button && categories) {

        // Détecter le clic sur le bouton
        button.addEventListener("click", function() {

            // Descendre doucement vers les rubriques
            categories.scrollIntoView({
                behavior: "smooth"
            });

        });

    }

});

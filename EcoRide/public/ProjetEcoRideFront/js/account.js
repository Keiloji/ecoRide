// account.js

// Exporter la fonction d'initialisation
export function initAccountPage() {
    console.log("Initialisation de la page Account");

    const btnChauffeur = document.getElementById("btn-chauffeur");
    const btnPassager = document.getElementById("btn-passager");
    const espaceChauffeur = document.getElementById("espace-chauffeur");
    const espacePassager = document.getElementById("espace-passager");

    console.log("btnChauffeur:", btnChauffeur);
    console.log("btnPassager:", btnPassager);
    console.log("espaceChauffeur:", espaceChauffeur);
    console.log("espacePassager:", espacePassager);

    if (!btnChauffeur || !btnPassager || !espaceChauffeur || !espacePassager) {
        console.error("Un ou plusieurs éléments nécessaires ne sont pas trouvés dans le DOM.");
        return;
    }

    btnChauffeur.addEventListener("click", function() {
        console.log("Bouton Chauffeur cliqué.");
        espaceChauffeur.classList.remove("hidden");
        espacePassager.classList.add("hidden");
    });

    btnPassager.addEventListener("click", function() {
        console.log("Bouton Passager cliqué.");
        espacePassager.classList.remove("hidden");
        espaceChauffeur.classList.add("hidden");
    });

    // Gestion de l'ajout de véhicule pour le Chauffeur
    let vehicules = [];
    const btnAjouterVehicule = document.getElementById("ajouter-vehicule");
    if (btnAjouterVehicule) {
        btnAjouterVehicule.addEventListener("click", function() {
            const marque = document.getElementById("marque").value;
            const modele = document.getElementById("modele").value;
            const couleur = document.getElementById("couleur").value;
            console.log("Tentative d'ajout de véhicule :", marque, modele, couleur);

            if (marque && modele && couleur) {
                vehicules.push({ marque, modele, couleur });
                updateVehiculeSelect();
                alert("Véhicule ajouté !");
            } else {
                alert("Veuillez remplir toutes les informations du véhicule.");
            }
        });
    }

    function updateVehiculeSelect() {
        const select = document.getElementById("choix-vehicule");
        if (select) {
            select.innerHTML = '<option value="">Choisissez un véhicule</option>';
            vehicules.forEach((vehicule, index) => {
                const option = document.createElement("option");
                option.value = index;
                option.textContent = `${vehicule.marque} ${vehicule.modele} (${vehicule.couleur})`;
                select.appendChild(option);
            });
            console.log("Liste des véhicules mise à jour :", vehicules);
        }
    }

    // Gestion de la publication d'un voyage par le Chauffeur
    const btnPosterCourse = document.getElementById("poster-course");
    if (btnPosterCourse) {
        btnPosterCourse.addEventListener("click", function() {
            const lieuDepart = document.getElementById("lieu-depart").value;
            const destination = document.getElementById("destination").value;
            const vehiculeSelect = document.getElementById("choix-vehicule").value;
            const dateDepart = document.getElementById("date-depart").value;
            const prix = document.getElementById("prix").value;
            console.log("Poster course avec :", lieuDepart, destination, vehiculeSelect, dateDepart, prix);

            if (lieuDepart && destination && vehiculeSelect !== "" && dateDepart && prix) {
                const courseHTML = `
                    <div class="course mb-3 p-3 border rounded">
                        <p><strong>Départ :</strong> ${lieuDepart}</p>
                        <p><strong>Destination :</strong> ${destination}</p>
                        <p><strong>Date :</strong> ${dateDepart}</p>
                        <p><strong>Prix :</strong> ${prix}€</p>
                        <button class="btn btn-success">Démarrer</button>
                        <button class="btn btn-danger">Annuler</button>
                        <button class="btn btn-primary">Arrivé à destination</button>
                    </div>
                `;
                const container = document.getElementById("courses-container");
                if (container) {
                    container.innerHTML += courseHTML;
                    console.log("Course ajoutée.");
                }
            } else {
                alert("Veuillez remplir tous les champs pour poster votre voyage.");
            }
        });
    }

    // Gestion de l'espace Passager (Crédits et interactions)
    const spanCredits = document.getElementById("credits-actuels");
    const inputAjouterCredit = document.getElementById("ajouter-credit");
    const btnAjouterCredit = document.getElementById("btn-ajouter-credit");
    if (spanCredits && inputAjouterCredit && btnAjouterCredit) {
        btnAjouterCredit.addEventListener("click", function() {
            const addValue = parseInt(inputAjouterCredit.value);
            if (!isNaN(addValue) && addValue > 0) {
                spanCredits.textContent = parseInt(spanCredits.textContent) + addValue;
                alert(`Crédits mis à jour. Vous avez maintenant ${spanCredits.textContent} crédits.`);
            } else {
                alert("Veuillez saisir un nombre valide de crédits.");
            }
        });
    }
}

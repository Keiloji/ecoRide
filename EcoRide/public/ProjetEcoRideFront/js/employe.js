document.addEventListener("DOMContentLoaded", () => {
    const avisList = document.getElementById("avis-list");
    const selectAvis = document.getElementById("select-avis");
    const validerBtn = document.getElementById("valider-btn");
    const refuserBtn = document.getElementById("refuser-btn");
    const incidentList = document.getElementById("incident-list");

    // Données simulées pour les avis en attente de validation
    let avisEnAttente = [  
        {
            id: 1,
            passager: "Ali Dan",
            trajet: "Paris → Lyon, 05 décembre 2024",
            commentaire: "Le chauffeur était en retard, et la conduite était brusque.",
            note: "★☆☆☆☆",
            statut: "En attente de validation"
        },
        {
            id: 2,
            passager: "Mania Man",
            trajet: "Marseille → Nice, 03 décembre 2024",
            commentaire: "Très bon trajet, mais le conducteur avait laissé la musique un peu forte.",
            note: "★★★☆☆",
            statut: "En attente de validation"
        },
        {
            id: 3,
            passager: "Nathan Pas",
            trajet: "Bordeaux → Toulouse, 06 décembre 2024",
            commentaire: "Expérience parfaite ! Le conducteur était ponctuel.",
            note: "★★★★★",
            statut: "En attente de validation"
        }
    ];

    // Données simulées pour les incidents signalés
    const incidents = [
        {
            id: 101,
            trajet: "Paris → Marseille",
            date: "02 décembre 2024",
            passager: "John Doe",
            chauffeur: "Max Dupont",
            emailPassager: "john.doe@email.com",
            emailChauffeur: "max.dupont@email.com",
            description: "Conflit verbal à cause d’un retard important."
        },
        {
            id: 102,
            trajet: "Nice → Lyon",
            date: "08 décembre 2024",
            passager: "Sophie Martin",
            chauffeur: "Julien Leroy",
            emailPassager: "sophie.martin@email.com",
            emailChauffeur: "julien.leroy@email.com",
            description: "Le passager s’est plaint de l’odeur de cigarette dans le véhicule."
        }
    ];

    // Afficher les avis en attente
    function afficherAvis() {
        avisList.innerHTML = "";
        selectAvis.innerHTML = '<option value="">Listes des avis</option>';

        avisEnAttente.forEach(avis => {
            const avisDiv = document.createElement("div");
            avisDiv.classList.add("avis");
            avisDiv.setAttribute("data-id", avis.id);
            avisDiv.innerHTML = `
                <p><strong>Passager :</strong> ${avis.passager}</p>
                <p><strong>Trajet :</strong> ${avis.trajet}</p>
                <p><strong>Commentaire :</strong> ${avis.commentaire}</p>
                <p><strong>Note :</strong> ${avis.note}</p>
                <p><strong>Statut :</strong> ${avis.statut}</p>
            `;
            avisList.appendChild(avisDiv);

            const option = document.createElement("option");
            option.value = avis.id;
            option.textContent = `Avis de ${avis.passager}`;
            selectAvis.appendChild(option);
        });
    }

    // Afficher les incidents signalés
    function afficherIncidents() {
        incidentList.innerHTML = "";  
        incidents.forEach(incident => {
            const incidentDiv = document.createElement("div");
            incidentDiv.classList.add("avis");
            incidentDiv.innerHTML = `
                <p><strong>Trajet :</strong> ${incident.trajet} (${incident.date})</p>
                <p><strong>Passager :</strong> ${incident.passager} (${incident.emailPassager})</p>
                <p><strong>Chauffeur :</strong> ${incident.chauffeur} (${incident.emailChauffeur})</p>
                <p><strong>Description :</strong> ${incident.description}</p>
            `;
            incidentList.appendChild(incidentDiv);
        });
    }

    // Événement pour valider un avis
    validerBtn.addEventListener("click", () => {
        const avisId = selectAvis.value;
        if (!avisId) {
            alert("Veuillez sélectionner un avis à valider.");
            return;
        }

        avisEnAttente = avisEnAttente.filter(avis => avis.id != avisId);  
        afficherAvis();
        alert("Avis validé avec succès !");
    });

    // Événement pour refuser un avis
    refuserBtn.addEventListener("click", () => {
        const avisId = selectAvis.value;
        if (!avisId) {
            alert("Veuillez sélectionner un avis à refuser.");
            return;
        }

        avisEnAttente = avisEnAttente.filter(avis => avis.id != avisId); 
        afficherAvis();
        alert("Avis refusé avec succès !");
    });

    afficherAvis();
    afficherIncidents();
});

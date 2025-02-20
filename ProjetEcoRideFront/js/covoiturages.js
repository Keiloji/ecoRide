document.addEventListener("DOMContentLoaded", function() {
    // Sélection du formulaire de recherche et conteneur de résultats
    const searchForm = document.getElementById("search-form");
    const resultsContainer = document.getElementById("results-container");
    const noResultsMessage = document.getElementById("no-results");

    // ma liste fictive des trajets correspondant aux profils des chauffeurs
    // Les données proviennent normalement du back-end (issus de "Mon Compte" des chauffeurs)
    const rides = [
        {
            id: 1,
            driver: "Alice",
            photo: "alice.jpg",
            rating: 4.8,
            seats: 2,
            price: 25,
            date: "2025-02-20",
            time: "10:00",
            eco: true
        },
        {
            id: 2,
            driver: "Jean",
            photo: "jean.jpg",
            rating: 4.2,
            seats: 1,
            price: 15,
            date: "2025-02-21",
            time: "12:00",
            eco: false
        }
    ];

    // Lorsque le formulaire de recherche est soumis
    searchForm.addEventListener("submit", function(e) {
        e.preventDefault();
        resultsContainer.innerHTML = "";

        // Ici,j'applique une logique de filtrage basée sur les valeurs saisies
        // Pour l'exemple, je filtre simplement les trajets avec au moins une place disponible
        let filteredRides = rides.filter(ride => ride.seats > 0);

        if (filteredRides.length === 0) {
            noResultsMessage.classList.remove("hidden");
        } else {
            noResultsMessage.classList.add("hidden");
            displayRides(filteredRides);
        }
    });

    // Fonction d'affichage des trajets
    function displayRides(rides) {
        resultsContainer.innerHTML = "";
        rides.forEach(ride => {
            const rideCard = document.createElement("div");
            rideCard.classList.add("ride-card");
            rideCard.innerHTML = `
                <img src="assets/images/${ride.photo}" alt="${ride.driver}">
                <div class="ride-info">
                    <p><strong>${ride.driver}</strong> ⭐ ${ride.rating}</p>
                    <p>${ride.seats} places restantes</p>
                    <p>Prix : ${ride.price}€</p>
                    <p>${ride.date} à ${ride.time}</p>
                    <p>${ride.eco ? "🌱 Écologique" : "🚗 Non écologique"}</p>
                    <button class="details-btn" data-id="${ride.id}">Détails</button>
                </div>
            `;
            resultsContainer.appendChild(rideCard);
        });

        // Ajout de l'événement "click" sur chaque bouton "Détails"
        document.querySelectorAll(".details-btn").forEach(btn => {
            btn.addEventListener("click", function() {
                const rideId = this.getAttribute("data-id");
                showRideDetails(rideId);
            });
        });
    }

    // Fonction pour afficher les détails d'un trajet (vue détaillée du covoiturage)
    function showRideDetails(rideId) {
        // Ici, je vais charger dynamiquement la page de détails via un routeur ou afficher un modal
        // Pour cet exemple, j'affiche simplement une alert avec l'ID du trajet
        alert("Afficher les détails pour le trajet ID: " + rideId);
    }
});

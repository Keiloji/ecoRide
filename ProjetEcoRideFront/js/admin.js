/* global Chart */

document.addEventListener("DOMContentLoaded", function() {
    const toggleFormBtn = document.getElementById("toggle-form-btn");
    const createAccountSection = document.getElementById("create-account-section");
    const createEmployeeForm = document.getElementById("create-employee-form");

    // 🔹 Toggle d'affichage du formulaire
    toggleFormBtn.addEventListener("click", () => {
        createAccountSection.classList.toggle("hidden");
    });

    // 🔹 Soumission du formulaire (simulée)
    createEmployeeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Compte employé créé !");
        createAccountSection.classList.add("hidden"); // Cacher le formulaire après soumission
    });

    // 🔹 Vérifier si Chart.js est bien chargé avant d'initialiser les graphiques
    if (typeof Chart === "undefined") {
        console.error("Chart.js n'est pas chargé !");
    } else {
        const ctxCredits = document.getElementById('creditsChart');
        const ctxRides = document.getElementById('ridesChart');

        if (ctxCredits && ctxRides) {
            new Chart(ctxCredits, {
                type: 'bar',
                data: {
                    labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
                    datasets: [{
                        label: 'Crédits gagnés par jour',
                        data: [120, 150, 180, 170, 200, 220, 240],
                        backgroundColor: 'green'
                    }]
                }
            });

            new Chart(ctxRides, {
                type: 'bar',
                data: {
                    labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
                    datasets: [{
                        label: 'Nombre de covoiturages',
                        data: [10, 15, 20, 18, 22, 25, 30],
                        backgroundColor: 'blue'
                    }]
                }
            });
        } else {
            console.error("Les éléments HTML pour les graphiques ne sont pas trouvés !");
        }
    }

    // 🔹 Gestion de la liste des employés
    const employeesTable = document.getElementById("employeesTable").querySelector("tbody");
    
    let employees = [
        { id: 1, name: "Alice Dupont", email: "alice@example.com" },
        { id: 2, name: "Jean Martin", email: "jean@example.com" }
    ];

    function renderEmployees() {
        employeesTable.innerHTML = ""; // Vide le tableau
        employees.forEach(employee => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${employee.name}</td>
                <td>${employee.email}</td>
                <td><button class="delete-btn" data-id="${employee.id}">Supprimer</button></td>
            `;
            employeesTable.appendChild(row);
        });

        // 🔹 Ajouter un événement sur chaque bouton "Supprimer"
        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", function() {
                const id = parseInt(this.getAttribute("data-id"));
                deleteEmployee(id);
            });
        });
    }

    function deleteEmployee(id) {
        employees = employees.filter(emp => emp.id !== id);
        renderEmployees();
    }

    renderEmployees();

    // 🔹 Gestion de la suppression des comptes utilisateurs
    const selectAccount = document.getElementById("select-account");
    const deleteAccountBtn = document.getElementById("delete-account-btn");

    let accounts = [
        { id: 1, name: "Sophie Bernard", email: "sophie@example.com" },
        { id: 2, name: "Marc Dubois", email: "marc@example.com" }
    ];

    function renderAccounts() {
        selectAccount.innerHTML = '<option value="">Liste des comptes</option>';
        accounts.forEach(account => {
            const option = document.createElement("option");
            option.value = account.id;
            option.textContent = `${account.name} (${account.email})`;
            selectAccount.appendChild(option);
        });
    }

    deleteAccountBtn.addEventListener("click", function () {
        const selectedId = parseInt(selectAccount.value);
        if (!selectedId) {
            alert("Veuillez sélectionner un compte !");
            return;
        }

        accounts = accounts.filter(account => account.id !== selectedId);
        alert("Compte supprimé avec succès !");
        renderAccounts();
    });

    renderAccounts();
});

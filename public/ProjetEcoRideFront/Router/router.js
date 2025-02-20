import Route from "./Route.js";
import { allRoutes, websiteName } from "./allRoutes.js";
import { initAccountPage } from "../js/account.js";

const route404 = new Route("404", "Page introuvable", "/pages/404.html");

const getRouteByUrl = (url) => {
    let currentRoute = null;
    allRoutes.forEach((element) => {
        if (element.url === url) {
            currentRoute = element;
        }
    });
    return currentRoute !== null ? currentRoute : route404;
};

const LoadContentPage = async () => {
    const path = window.location.pathname;
    const actualRoute = getRouteByUrl(path);
    try {
        const response = await fetch(actualRoute.pathHtml);
        const html = await response.text();

        // Injection du contenu dans l'élément "main-page"
        const mainPageEl = document.getElementById("main-page");
        if (mainPageEl) {
            mainPageEl.innerHTML = html;
        } else {
            console.error("L'élément avec l'ID 'main-page' n'a pas été trouvé.");
        }
        
        document.title = actualRoute.title + " - " + websiteName;
        
        // Charge le script spécifique si défini
        if (actualRoute.pathJS && actualRoute.pathJS !== "") {
            const scriptTag = document.createElement("script");
            scriptTag.type = "module";
            scriptTag.src = actualRoute.pathJS;
            scriptTag.onload = () => {
                console.log(actualRoute.title + " script chargé.");
                if (path === "/account") {
                    initAccountPage();
                }
            };
            document.body.appendChild(scriptTag);
        } else {
            // Si la page est account, on appelle initAccountPage après un court délai
            if (path === "/account") {
                setTimeout(() => {
                    if (typeof initAccountPage === "function") {
                        initAccountPage();
                    } else {
                        console.error("initAccountPage n'est pas défini.");
                    }
                }, 100);
            }
        }
    } catch (error) {
        console.error("Erreur lors du chargement de la page :", error);
    }
};

window.onpopstate = LoadContentPage;
window.route = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    LoadContentPage();
};

LoadContentPage();

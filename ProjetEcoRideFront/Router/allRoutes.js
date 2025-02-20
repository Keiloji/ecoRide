import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/404", "404", "/pages/404.html"),
    new Route("/covoiturages", "Covoiturages", "/pages/covoiturages.html"),
    new Route("/signin", "Connexion", "/pages/signin.html"),
    new Route("/signup", "Inscription", "/pages/signup.html"),
    new Route("/account", "Mon Compte", "/pages/account.html", "/js/account.js"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/aboutUs", "À propos de Nous", "/pages/aboutUs.html"),
    new Route("/legal", "Mention Légales", "/pages/legal.html"),
    new Route("/employe", "Espace Employée", "/pages/employe.html", "/js/employe.js"),
    new Route("/admin", "Espace Administrateur", "/pages/admin.html", "/js/admin.js"),];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "EcoRide";
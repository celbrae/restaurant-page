import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const contentDiv = document.querySelector("#content");

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");

loadHome();

homeButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    loadHome();
})

menuButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    loadMenu();
})

aboutButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    loadAbout();
})
// JavaScript Document
console.log("hi");


/* Menu */

// zoek de menu-button op en sla die op in een variabele
var openButton = document.querySelector("header > button");

// laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.onclick = openMenu;

// voeg in de functie een class toe aan de nav
function openMenu() {
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}

// Menu sluiten

// stap 1 - zoek sluiten button op
var sluitButton = document.querySelector("nav button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}

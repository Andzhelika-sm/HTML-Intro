// Step 1: Select HTML elements

const mainHeading = document.querySelector("h1");
const subheading = document.querySelector("h2");
const firstParagraph = document.querySelector("p");
const button = document.querySelector("button");

// Step 2: Create separate functions

function changeRestaurantName() {
  mainHeading.style.color = "darkred";
}

function changeMenuHeading() {
  subheading.style.fontSize = "30px";
}

function highlightDescription() {
  firstParagraph.style.backgroundColor = "lightyellow";
}

function changeButtonColor() {
  button.style.backgroundColor = "lightgreen";
}

// Step 3: Create the main function

function highlightMenu() {
  changeRestaurantName();
  changeMenuHeading();
  highlightDescription();
  changeButtonColor();
}

button.addEventListener("click", highlightMenu);

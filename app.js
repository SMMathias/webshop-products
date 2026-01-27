"use strict";

// ===== APP INITIALISERING =====
// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// Initialize the app - sæt event listeners og hent data
function initApp() {
  console.log("App initialized");
}

const productTitle = "Fjallraven - Foldsack No. 1 Backpack";
const productPrice = 849;
const inStock = true;

const productTitle2 = "Mens Casual Premium Slim Fit T-Shirts";
const productPrice2 = 179;
const inStock2 = true;

if (inStock) {
  const testSection = document.querySelector("#test");
  const html = `
    <div>
      <h3>Test: Produkt information</h3>
      <p><strong>Titel:</strong> ${productTitle}</p>
      <p><strong>Pris:</strong> ${productPrice} kr</p>
      <p><strong>På lager:</strong> ${inStock}</p>
    </div>
  `;
  testSection.insertAdjacentHTML("beforeend", html);
}

if (inStock2) {
  const testSection = document.querySelector("#test");
  const html = `
    <div>
      <h3>Test: Produkt information</h3>
      <p><strong>Titel:</strong> ${productTitle2}</p>
      <p><strong>Pris:</strong> ${productPrice2} kr</p>
      <p><strong>På lager:</strong> ${inStock2}</p>
    </div>
  `;
  testSection.insertAdjacentHTML("beforeend", html);
}

if (inStock) {
  console.log(`${productTitle} er på lager!`);
} else {
  console.log(`${productTitle} er ikke på lager!`);
}

if (productPrice > productPrice2) {
  console.log(`${productTitle} er dyrest og koster ${productPrice}`);
} else {
  console.log(`${productTitle2} er dyrest og koster ${productPrice2} kr`);
}

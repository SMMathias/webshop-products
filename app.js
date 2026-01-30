import { products } from "./data.js";
// import { getExcerpt, getStockStatus } from "./helpers.js";

// Event listener - starter appen når siden er loaded
document.addEventListener("DOMContentLoaded", initApp);

// Initialize app
function initApp() {
  console.log("App initialized");
  displayAllProducts();
}

// Vis alle produkter
function displayAllProducts() {
  const grid = document.querySelector("#productGrid");
  grid.innerHTML = products.map(displayProduct).join("");
}

// Vis ét produkt
function displayProduct(product) {
  return /*html*/ `
    <article class="product-card">
      <img src="${product.image}" class="product-image" />
      <div class="product-info">
        ${product.id < 5 ? '<span class="badge new">New!</span>' : ""}
            ${product.price < 50 && '<span class="badge">Godt tilbud! 💰</span>'}

        <h2 class="product-title">${product.title}</h2>
          <p class="product-price">$${product.price}</p>
          <span class="product-stock ${product.inStock ? "in-stock" : "out-of-stock"}"> ${product.inStock ? "På lager" : "Udsolgt"} </span>
      </div>
    </article>
  `;
}

const testProduct = products[0];
const html = `
  <div class="product-info">
    <h2>${testProduct.title}</h2>
    ${testProduct.inStock && '<span class="badge">På lager! 🎉</span>'}
    ${testProduct.price < 50 && '<span class="badge">Godt tilbud! 💰</span>'}
    ${testProduct.rating.rate > 4.5 && '<span class="badge">⭐ Top rated!</span>'}
    ${testProduct.count > 200 && '<span class="badge">Bestseller</span>'}
    ${testProduct.price > 100 ? "Free Shipping" : "Paid Shipping"}
    ${testProduct.description || "Ingen beskrivelse"}
  </div>
`;
console.log(html);

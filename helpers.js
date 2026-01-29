export const getExcerpt = (text) => text.substring(0, 100) + "...";

export const getStockStatus = (inStock) =>
  inStock
    ? { text: "På lager", class: "in-stock" }
    : { text: "Udsolgt", class: "out-of-stock" };

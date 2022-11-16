import { dataProducts } from "../src/Sdata";

export function getPro() {
  const productsList = dataProducts;
  return productsList;
}

export function filterProducts(proType) {
  let filtPro = getPro().filter(type => type.category === proType);
  return filtPro;
  
}

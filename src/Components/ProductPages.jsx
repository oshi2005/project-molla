import React from "react";
import Footter from "./Footter";
import Header from "./Header/Header";
import "../asset/css/ProductPages.css";
export default function ProductPages() {
  return (
    <div>
      <Header />

      <div className="title-products">
        <h3>Products</h3>
        <p>Molla Shop</p>
      </div>
      <Footter />
    </div>
  );
}

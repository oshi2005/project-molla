import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../asset/css/Products.css";
export default function Products() {
  const [listProducts, setlistProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const resultProduct = await axios({
        method: "get",
        url: `https://fakestoreapi.com/products`,
      });
      setlistProducts(resultProduct.data);
    };
    getProducts();
  }, []);
  return (
    <>
    <div className="btn-all">
        <button className="btn-p all">ALL</button>
        <button className="btn-p men">men's clothing</button>
        <button className="btn-p jewelery">jewelery</button>
        <button className="btn-p electronics">electronics</button>
        <button className="btn-p women">women's clothing</button>
      </div>
    <div className="container-pro">
      
      {listProducts.map((product) => (
        <div className="card">
          <img src={product.image} alt="" />
          <div className="price-pro">
            <span>{product.category}</span>
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

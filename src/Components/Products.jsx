import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewItems, deleteItems } from "../redux/userSlice";
import "../asset/css/Products.css";
import { dataProducts } from "../Sdata";
export default function Products() {
  // const { items } = useSelector((state, action) => state.counter);
  const dispatch = useDispatch();
  const [listProducts, setlistProducts] = useState(dataProducts);
  const filterResult = (catItem) => {
    const result = dataProducts.filter((curData) => {
      return curData.category === catItem;
    });
    setlistProducts(result);
  };
  return (
    <>
      <h3 className="heading">All Catogeries</h3>
      <div className="btn-pro">
        <button className="btn-p" onClick={() => setlistProducts(dataProducts)}>
          All
        </button>
        <button className="btn-p" onClick={() => filterResult("men")}>
          men's clothing
        </button>
        <button className="btn-p" onClick={() => filterResult("jewelery")}>
          jewelery
        </button>
        <button className="btn-p" onClick={() => filterResult("electronics")}>
          electronics
        </button>
        <button className="btn-p" onClick={() => filterResult("women")}>
          women's clothing
        </button>
      </div>
      <div className="container-pro">
        {listProducts.map((type) => (
          <div key={type.id} className="card">
            <img src={type.image} alt="" />
            <div className="title" onClick={() => dispatch(addNewItems())}>
              Thêm nhanh vào giỏ hàng
            </div>
            <div className="price-pro">
              <span>{type.category}</span>
              <h2>{type.title}</h2>
              <h3>${type.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

import React from "react";
import "../../asset/css/HeaderStyle.css";
export default function Header() {
  return (
    <div className="container-header">
      <div className="logo">
        <h3><span>M</span>olla</h3>
      </div>
      <div className="r-container">
        <div className="navbar">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/product">PRODUCT</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="icon">
          <form>
            <input   type="text" placeholder="Search product" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </form>
          <div className="icon-cart">
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-cart-shopping"><span>0</span></i>
          </div>
          
        </div>
      </div>
    </div>
  );
}

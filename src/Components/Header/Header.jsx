import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/productpages">PRODUCT</Link>
            </li>
            <li>
              <Link to="/form">CONTACT</Link>
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

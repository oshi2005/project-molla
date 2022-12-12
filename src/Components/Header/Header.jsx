import React from "react";
import { Link } from "react-router-dom";

import "../../asset/css/HeaderStyle.css";
export default function Header() {
  return (
    <div className="container-header">
      <div className="logo">
        <h3>
          <span>M</span>olla
        </h3>
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
            <input type="text" placeholder="Search product" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </form>
          <div className="icon-cart">
            <i class="fa-solid fa-heart"></i>
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping">
                <span style={{ color: "red", fontSize: "1.7rem" }}>0</span>
              </i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

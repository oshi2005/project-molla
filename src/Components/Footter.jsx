import React from "react";
import "../asset/css/Footter.css";
export default function Footter() {
  return (
    <div className="container-footter grid">
      <div className="r-footter">
        <h3>
          <span>M</span>olla
        </h3>
        <p>
          Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,
          eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
          tincidunt quis, accumsan porttitor, facilisis luctus, metus.
        </p>
        <h4>Get Question? Call us 24/7</h4>
        <h4>
          Phone: <span>123456789</span>
        </h4>
      </div>
      <div className="l-footer">
        <div className="col">
          <h3 className="headding">Information</h3>
          <p className="text-headding">About Us</p>
          <p className="text-headding">Contact Us</p>
          <p className="text-headding">Login</p>
        </div>
        <div className="col">
          <h3 className="headding">Customer Service</h3>
          <p className="text-headding">Terms And Condtions</p>
          <p className="text-headding">Privacy Policy</p>
          <p className="text-headding">Returns</p>
          <p className="text-headding">Shipping</p>
        </div>
        <div className="col">
          <h3 className="headding">My Account</h3>
          <p className="text-headding">Sign</p>
          <p className="text-headding">View Cart</p>
          <p className="text-headding">My Wishist</p>
        </div>
      </div>
    </div>
    
  );
}

import React from "react";
import Branch from "../Components/Branch";
import Catogeries from "../Components/Categories";
import Contact from "../Components/Contact";
import Header from "../Components/Header/Header";
import Products from "../Components/Products";
import Sliderbar from "../Components/Sliderbar";

export default function Homes() {
  return (
    <div>
      <Header />
      <Sliderbar />
      <Branch />
      <Catogeries />
      <Products />
      <Contact />
    </div>
  );
}

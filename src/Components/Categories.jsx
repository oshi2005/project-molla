import React from "react";
import { dataCategories } from "../Sdata";
import "../asset/css/Categories.css";

export default function Catogeries() {
  return (
    <div className="container-catog">
      <div className="l-catogeries">
        <img
          src="https://d-themes.com/react/molla/demo-5/images/home/banners/banner-1.jpg"
          alt=""
        />
        <div className="content">
          <span>Trending Now</span>
          <h3>
            This Week's <br></br> Most Wanted
          </h3>
          <span>Discover Now</span>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className="r-catogeries">
        <div className="t-catogeries">
          <img
            src="https://d-themes.com/react/molla/demo-5/images/home/banners/banner-2.jpg"
            alt=""
          />
          <div className="content-t">
            <span>Limited Only</span>
            <h3>
              Trainer & Sportwear<br></br>
              Sale Up to 70%{" "}
            </h3>
            <span>Shop Now</span>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="t-catogeries">
          <img
            src="https://d-themes.com/react/molla/demo-5/images/home/banners/banner-3.jpg"
            alt=""
          />
          <div className="content-t">
            <span>Limited Only</span>
            <h3>
              This Week's Most <br></br>
              Wanted
            </h3>
            <span>Discover Now</span>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

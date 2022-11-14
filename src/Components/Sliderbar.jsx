import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '..//./asset/css/SliderbarStyle.css'
import { dataBanner } from "../Sdata";
export default function Sliderbar() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    
    <div>
      <Slider  {...settings}>
      {dataBanner.map((items) => (
        <div className="card-sldier">
          <div className="img">
            <img src={items.background} />
          </div>
          <div className="context">
            <span>{items.topSuggest}</span>
            <h3>{items.bottomSuggest}</h3>
            <span>{items.topSuggest}</span>
            <button className="btn">{items.btnContent}</button>

          </div>
        </div>
      ))}
      </Slider>
    </div>
  
  );
}

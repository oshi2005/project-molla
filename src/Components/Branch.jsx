import React from 'react'
import { dataBrands } from '../Sdata'
import Slider from "react-slick";
import '../asset/css/Brand.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Branch() {
    const settings = {
    
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
        
      };
  return (
    <div className='container-brach'>
        <Slider {...settings}>
        {dataBrands.map((items) => (
            <div className="brach">
                <div className='card'>
                <img src= {items} alt="" />
                </div>
            </div>
        ))}
        </Slider>
    </div>
  )
}

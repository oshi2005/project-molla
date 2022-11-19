import React from 'react'
import '../asset/css/Contact.css'
export default function Contact() {
  return (
    <div className='container-contact grid'>
        <div className="r-contact">
             <h3 className='headding'>Shop Social</h3>
             <p className='paragraph'>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
             <div className="icon-contact">
             <i class="fa-brands fa-facebook"></i>
             <i class="fa-brands fa-youtube"></i>
             <i class="fa-brands fa-instagram"></i>
             </div>
        </div>
        <div className="l-contact">
            <h3 className='headding'>Get the Latest Deals</h3>
            <p className='paragraph'>and receive <span>$20 coupon</span> for first shopping</p>
            <input type="text" placeholder="Type your email..." className='input-email'></input>
            <button className='btn-email'>&gt;</button>
        </div>
    </div>
  )
}

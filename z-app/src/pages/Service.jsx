import React from 'react'
import './Service.css'
import { Link } from "react-router-dom";
import svgone from './imagez/Services1.svg'
import svgtwo from './imagez/Services2.svg'
import svgthree from './imagez/Services3.svg'
import svgfour from './imagez/Services4.svg'
import servicevideo from './imagez/Services video.mp4'
import reviewimg from './imagez/review img.png'
export default function Service() {
  return (
   <>
   <div className='bg-color'>
    <h1>ECOMMERCE MANAGEMENT  SERVICES</h1>
    <div className='parent-card' data-aos="fade-up"
     data-aos-duration="3000">
        
        <div className="cards">
          <img src={svgone} alt="amzn"  />
           <p>Amazon Full Account Management Services</p>
            <button><Link to={'/Amazon-Full-Account-Management-Services'}>Explore Services</Link></button>
        </div>
        <div className="cards">
          <img src={svgtwo} alt="amzn" />
           <p>Online <br/> Arbitrage & <br /> Retail Services</p>
            <button> <Link to={'/Online-Arbitrage'}>Explore Services</Link></button>
        </div>
        <div className="cards">
          <img src={svgthree} alt="amzn" />
           <p>Amazon <br/> Wholesale FBA Services</p>
            <button><Link to={'/Amazon-Wholesale-FBA'}>Explore Services</Link></button>
        </div>
        <div className="cards">
          <img src={svgfour} alt="amzn" />
           <p>3PL and <br/> Warehousing <br /> Services</p>
            <button><Link to={'/3PL-warehouse'}>Explore Services</Link></button>
        </div>
    </div>
   </div>
   <div className='video'>
        <video src={servicevideo} loop muted autoPlay/>
       </div>

       <div className="parent-revenue">
       <div className='revenue'>
      <img src={reviewimg} alt="Review" />
      <div className='head-area'>
        <h1>READY TO GROW <br /> YOUR REVENUE?</h1>
        <button>Speak to Ecom Gleam</button>
      </div>
       </div>
       </div>
   </>
  )
}

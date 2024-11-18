import React, { useState } from 'react'
import './threepl.css'
import Linediv from './Linediv'
import wvideoz from '../Our Services/images/3PL-main video.mp4'
export default function Threepl() {
 let [hover,sethover]=useState()
let cardeactive=()=> sethover(!hover)
 let  cardactive =(index)=>{
    sethover(index)
 }

  return (
   <>
   <div className='PL-warehouse'>
    <div className="wareshouse-heading">
       <p className='warehouse-subhead'>3PL & Warehousing Services</p>
       <p>Rectify Your Supply <br /> Chain Efficiency with <span style={{color:'#00a797'}}> <br />Ecom Gleam</span></p>
       <p className="manage-para">
          Customized warehousing solutions aimed at improving inventory management, streamlining operations, and fostering business growth.
          </p>

     
            <button>Let's Chat</button>
            <button>Our Story</button>
         
    </div>
    <div className="wareshouse-video">
      <video src={ wvideoz} autoPlay muted loop></video>
    </div>
   </div>


   <div className="warehouse-cards">
    <div className="warehouse-cards-parent">
      <div className="cardz-manage">
        <p>What Includes in Our Services</p>
       
      </div>
      <div className="cardz"  onMouseEnter={()=>cardactive(0)} onMouseLeave={cardeactive}>
        <p>Inventory <br /> Management</p>
        <div className={hover===0? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Inventory  <br />Management</p>
            <p className="hover-main-card-para">
              Customized warehousing solutions aimed at improving inventory
              management, streamlining operations, and fostering business
              growth.
            </p>
            </div>
          </div>
      </div>
      <div className="cardz" onMouseEnter={()=>cardactive(1)} onMouseLeave={cardeactive}>
        <p>Storage <br /> Solutions</p>
        <div className={hover===1? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Storage <br /> Solutions</p>
            <p className="hover-main-card-para">
            Secure and organized storage options tailored to your product
            requirements.
            </p>
            </div>
          </div>
      </div>
      <div className="cardz" onMouseEnter={()=>cardactive(2)} onMouseLeave={cardeactive}>
        <p>Order <br /> Fulfilment</p>
        <div className={hover===2? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Order <br />Fulfilment</p>
            <p className="hover-main-card-para">
            Efficient processing of orders, including picking, packing, and
            shipping, to ensure timely delivery to your customers..
            </p>
            </div>
          </div>
      </div>
    </div>
   </div>

   <Linediv/>

   <div className="warehouse-cards">
    <div className="warehouse-cards-parent">
      <div className="cardz"  onMouseEnter={()=>cardactive(3)} onMouseLeave={cardeactive}>
        <p>Amazon FBA  <br />Prep Services</p>
        <div className={hover===3? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Amazon FBA <br /> Prep Service</p>
            <p className="hover-main-card-para">
            Preparation of products according to Amazon's requirements, including labelling, packaging, and shipment to Amazon fulfilment centres.
            </p>
            </div>
          </div>
      </div>
      <div className="cardz" onMouseEnter={()=>cardactive(4)} onMouseLeave={cardeactive}>
        <p>Returns <br /> Management</p>
        <div className={hover===4? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Returns <br /> Management</p>
            <p className="hover-main-card-para">
            Preparation of products according to Amazon's requirements, including labelling, packaging, and shipment to Amazon fulfilment centres.
            </p>
            </div>
          </div>
      </div>
      <div className="cardz" onMouseEnter={()=>cardactive(5)} onMouseLeave={cardeactive}>
        <p>Shipping <br /> Solution</p>
        <div className={hover===5? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Shipping <br /> Solution</p>
            <p className="hover-main-card-para">
            Cost-effective and reliable shipping options to meet your delivery needs.
            </p>
            </div>
          </div>
      </div>
      <div className="cardz" onMouseEnter={()=>cardactive(6)} onMouseLeave={cardeactive}>
        <p>Custom <br />Reporting</p>
        <div className={hover===6? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Custom <br />Reporting</p>
            <p className="hover-main-card-para">
            Detailed insights into inventory levels, order statuses, and logistics performance to help you make informed decisions.
            </p>
            </div>
          </div>
      </div>
    </div>
   </div>
   </>
  )
}

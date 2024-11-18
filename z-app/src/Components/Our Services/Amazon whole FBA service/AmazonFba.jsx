import React, { useState } from 'react'
import Linediv from '../Linediv'
import fbaimg from '../images/wholesale1.png'
export default function AmazonFba() {
    let [hover,sethover]=useState()
let cardeactive=()=> sethover(!hover)
 let  cardactive =(index)=>{
    sethover(index)
 }
  return (
    <>
      <div className='PL-warehouse'>
    <div className="wareshouse-heading">
       <p className='warehouse-subhead'> Wholesale Services</p>
       <p> Navigate Towards  <br /> E-commerce  with <span style={{color:'#00a797'}}> <br />Ecom Gleam</span></p>
       <p className="manage-para">
       Maximize Your  Wholesale Potential & Propel Your E-commerce Business with Expert wholesale Services from Ecom Gleam!
          </p>

     
            <button>Let's Chat</button>
            <button>Our Story</button>
         
    </div>
    <div className="wareshouse-video">
   <img src={fbaimg} alt="" />
    </div>
   </div>


   <div className="warehouse-cards">
    <div className="warehouse-cards-parent">
      <div className="cardz-manage">
        <p>What Includes in Our Services</p>
       
      </div>
      <div className="cardz"  onMouseEnter={()=>cardactive(0)} onMouseLeave={cardeactive}>
        <p>Product Sourcing & Researc</p>
        <div className={hover===0? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Product Sourcing & Researc</p>
            <p className="hover-main-card-para">
            Selecting wholesale products Market research Supplier negotiations
            </p>
            </div>
          </div>
      </div>
      <div className="cardz" onMouseEnter={()=>cardactive(1)} onMouseLeave={cardeactive}>
        <p>Brand Outreach</p>
        <div className={hover===1? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Brand Outreach</p>
            <p className="hover-main-card-para">
            Secure distribution rights
            Negotiate terms
            Build relationships
            </p>
            </div>
          </div>
      </div>
      <div className="cardz" onMouseEnter={()=>cardactive(2)} onMouseLeave={cardeactive}>
        <p>Inventory Management</p>
        <div className={hover===2? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Inventory Management</p>
            <p className="hover-main-card-para">
            Prevent stock-outs
                Optimize storage
                Demand forecasting
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
        <p>Customer Service</p>
        <div className={hover===3? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">ACustomer Service</p>
            <p className="hover-main-card-para">
            Resolve inquiries
                Manage returns
                Monitor feedback
            </p>
            </div>
          </div>
      </div>
      <div className="cardz" onMouseEnter={()=>cardactive(4)} onMouseLeave={cardeactive}>
        <p>Compliance and Regulations</p>
        <div className={hover===4? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Compliance and Regulations</p>
            <p className="hover-main-card-para">
            Ensure compliance
            Manage listings
                Stay updated        
                       </p>
            </div>
          </div>
      </div>
      <div className="cardz" onMouseEnter={()=>cardactive(5)} onMouseLeave={cardeactive}>
        <p>Analytics and Reporting</p>
        <div className={hover===5? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Analytics and Reporting</p>
            <p className="hover-main-card-para">
                Sales insights
                Competitive analysis
                Growth recommendations.
            </p>
            </div>
          </div>
      </div>
      <div className="cardz" onMouseEnter={()=>cardactive(6)} onMouseLeave={cardeactive}>
        <p>Premium Branding</p>
        <div className={hover===6? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Premium Branding</p>
            <p className="hover-main-card-para">
             Selective Distribution Management
              Exclusive Partnership Development
              Brand Protection and Market Segmentation           
               </p>
            </div>
          </div>
      </div>
    </div>
   </div>
    
    </>
  )
}

import React, { useState } from 'react'
import '../threepl.css'
import Linediv from '../Linediv'
import amz  from '../images/amazonMangment1.png'
export default function Threepl() {
 let [hover,sethover]=useState()
let cardeactive=()=> sethover(!hover)
 let  cardactive =(index)=>{
    sethover(index)
 }

  return (
   <>
   <div className='PL-warehouse'>
    <div className="wareshouse-heading"  data-aos="fade-right"
     data-aos-offset="300" data-aos-duration="2000">
       <p className='warehouse-subhead'> Amazon Private Label and Brand Management</p>
       <p>Maximize Your Impact in <br /> E-commerce sphere with<span style={{color:'#00a797'}}> <br />Ecom Gleam</span></p>
       <p className="manage-para">
       Maximize your Amazon business with our expert Private Label and
            Brand Management Services, ensuring standout performance and
            customer loyalty in a competitive market.
          </p>

     
            <button>Let's Chat</button>
            <button>Our Story</button>
         
    </div>
    <div className="wareshouse-video"  data-aos="fade-left"
     data-aos-offset="300" data-aos-duration="2000" >
     <img src={amz} alt="" />
    </div>
   </div>


   <div className="warehouse-cards">
    <div className="warehouse-cards-parent">
    <div className="cardz"  onMouseEnter={()=>cardactive(0)} onMouseLeave={cardeactive}>
        <p>Brand Strategy and Development</p>
        <div className={hover===0? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Brand Strategy and Development</p>
            <p className="hover-main-card-para">
            Brand Identity Creation
              Brand Positioning
              Brand Messaging
            </p>
            </div>
          </div>
      </div>
      <div className="cardz"  onMouseEnter={()=>cardactive(7)} onMouseLeave={cardeactive}>
        <p>Brand Strategy and Development</p>
        <div className={hover===7? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Brand Strategy and Development</p>
            <p className="hover-main-card-para">
            Brand Identity Creation
              Brand Positioning
              Brand Messaging
            </p>
            </div>
          </div>
      </div>
      <div className="cardz" onMouseEnter={()=>cardactive(1)} onMouseLeave={cardeactive}>
        <p>Product Development and Optimization</p>
        <div className={hover===1? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Product Development and Optimization</p>
            <p className="hover-main-card-para">
          Product Research
             Product Sourcing
             Product Sourcing Optimization
            </p>
            </div>
          </div>
      </div>
      <div className="cardz" onMouseEnter={()=>cardactive(2)} onMouseLeave={cardeactive}>
        <p>Marketing and Advertising</p>
        <div className={hover===2? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Marketing and Advertising</p>
            <p className="hover-main-card-para">
               SEO Optimization      
               PPC Advertising
              Social Media Marketing
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
        <p>Inventory Management and Fulfillment</p>
        <div className={hover===3? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Inventory Management and Fulfillment</p>
            <p className="hover-main-card-para">
               Fulfillment Services  
              inventory Planning 
              Supplier Management
            </p>
            </div>
          </div>
      </div>
      <div className="cardz" onMouseEnter={()=>cardactive(4)} onMouseLeave={cardeactive}>
        <p>Customer Service and Support</p>
        <div className={hover===4? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Customer Service and Support</p>
            <p className="hover-main-card-para">
            Customer Support   
              Feedback Analysis
              Customer Relationship Management
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
              Performance Tracking  
              Data Analysis
              Reporting       </p>
            </div>
          </div>
      </div>
      <div className="cardz" onMouseEnter={()=>cardactive(6)} onMouseLeave={cardeactive}>
        <p>Compliance and Regulatory Adherence</p>
        <div className={hover===6? "hover-card active" : "hover-card "} >
            <div className='hover-main-card'>
            <p className="hover-main-card-Title">Compliance and Regulatory Adherence</p>
            <p className="hover-main-card-para">
             Amazon Policies  
              Regulatory Compliance
              Risk Managemen </p>
            </div>
          </div>
      </div>
    </div>
   </div>


    <div className="site-message">
      <h1>LEAVE A MESSAGE FOR US</h1>
      <p> Contact Us Today,Our Team Is Ready To Support Your Goals,Whether
          You're Seeking Expert Guidance,CAmpaign Management or Strategic
          Consultation.</p>

          <div className="site-btn-link">
            <p> Take Your Brand to New Heights on Amazon</p>
            <button>Speak to ECom Gleam</button>
          </div>
    </div>

   </>
  )
}

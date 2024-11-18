import React from 'react'
import './Patners.css'
import partner1 from './imagez/partner1.png'
import partner2 from './imagez/partner2.png'
import partner3 from './imagez/partner3.png'
import partner4 from './imagez/partner4.png'
import partner5 from './imagez/partner5.png'
import partner6 from './imagez/partner6.png'
import person1 from './imagez/person1 (1).png'
import person2 from './imagez/person1 (2).png'
import client from './imagez/client.png'
import  approach1 from './imagez/approach1.svg'
import  approach2 from './imagez/approach2.svg'
import  approach3 from './imagez/approach3.svg'
import  approach4 from './imagez/approach4.svg'
import  approach5 from './imagez/approach5.svg'
export default function Patners() {
  return (
   <>
   <div className="partners">
    <h1>our patners</h1>
   <div className="parent-animate">
   <div className="picture-animate">
        <img src={partner1} alt="" />
        <img src={partner2} alt="" />
        <img src={partner3} alt="" />
        <img src={partner4} alt="" />
        <img src={partner5} alt="" />
        <img src={partner6} alt="" />
    </div>
   <div className="picture-animate">
        <img src={partner1} alt="" />
        <img src={partner2} alt="" />
        <img src={partner3} alt="" />
        <img src={partner4} alt="" />
        <img src={partner5} alt="" />
        <img src={partner6} alt="" />
    </div>
   </div>
   </div>


   <div className="team">
    <h1>MEET THE TEAM</h1>
    <div className="parent-team">
    <div className="team-member">
   <div className="person-1">
      <img src={person1} alt="" />
   
    </div>
    <div className="person-2">
      <img src={person2} alt="" />
    </div>
   
   </div>
    <div className="team-members">
   <div className="person-1">
      <img src={person1} alt="" />
   
    </div>
    <div className="person-2">
      <img src={person2} alt="" />
    </div>
   
   </div>
    </div>
   </div>


   <div className="client">
    <h1>OUR CLIENTS</h1>
    <div className="client-section">
    <div className="client-imagz">
    <img src={client} alt="" />
    </div>
    <div className="client-imagez">
    <img src={client} alt="" />
    </div>
    </div>
   </div>

  <div className="sub-heading">
    <h1>lets's bring your next project to <br />life, together</h1>
    <button>Speak to ECom Gleam</button>
  </div>


  <div className="approach">
    <h1>Our approach</h1>
    <div className="approach-pictures">
     <div className="approach-item">
     <img src={approach1} alt='' />
     <h3>Revenue <br />first</h3>
     </div>
     <div className="approach-item">
     <img src={approach2} alt='' />
     <h3>Dedicated <br /> management</h3>
     </div>
     <div className="approach-item">
     <img src={approach3} alt='' />
     <h3>Quality <br />assurance</h3>
     </div>
    
    </div>
    <div className="approach-support">
    <div className="support-card">
    <div className="support-item">
     <img src={approach4} alt='' />
     <h3>On-demand <br />support</h3>
     </div>
    <div className="support-item">
     <img src={approach5} alt='' />
     <h3>Authenticity</h3>
     </div>
    </div>
    </div>
  </div>
   </>
  )
}

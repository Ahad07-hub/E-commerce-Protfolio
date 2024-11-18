import React from 'react'
import './Clients.css'
import clients from './imagez/Work1.png'
import Work1 from './imagez/workM1.png'
import Work2 from './imagez/workM2.png'
import Work3 from './imagez/workM3.png'
import line1 from './imagez/WorkStyle.png'
import line2 from './imagez/WorkStyle2.png'
import booking1  from './imagez/Booking1.png'
import booking2  from './imagez/Booking2.png'
import booking3  from './imagez/Booking3.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Clients() {
  return (
 <>

 <div className='Clients'>
  <h1>here from our clients</h1>
  <img src={clients} alt="Clients-reviews" />  
</div> 


<div className="working-process">
    <h1>our working process</h1>
    <div className="work-section-1">
        <img src={Work1} alt="Insightfull" />
        <div className="w-head">
            <h1>INSIGHTFUL CONSULTATION</h1>
            <p>We Devlve into Your Business Goals And <br /> Challenges. Conducting Through Analysis To <br/>  Uncover Key Insights.</p>
        </div>
    </div>
    <div className="linestyle">
            <img src={line1} alt="" />
        </div>
    
        <div className="work-section-1">
        <div className="w-head">
            <h1>Strategic Customization <br /> and Execution</h1>
            <p>Crafting and implementing bespoke strategies <br /> aligned with your objectives, optimizing for <br /> efficiency and growth.</p>
        </div>
        <img src={Work2} alt="Insightfull" />
    </div>
    <div className="linestyle">
            <img src={line2} alt="" />
        </div>

        <div className="work-section-1">
        <img src={Work3} alt="Insightfull" />
        <div className="w-head">
            <h1>Transparent <br /> Accountability</h1>
            <p>Vigilantly monitoring performance metrics, <br /> delivering clear, actionable insights to foster <br /> transparency and accountability.</p>
        </div>
    </div>
</div>

<div className="booking">
    <div className="flex-booking">
    <h1>book a time with us <br /> or drop in for a <br />coffee</h1>
       <img src={booking2} alt="Booking-img" />
    </div>
    <div className="picture-head">
        <img src={booking1} alt="" />
        <div className="info">
            <p>  <FontAwesomeIcon icon={faPhone} />+1 (215) 305-8197</p>
            <div className="email-info">
            <p><FontAwesomeIcon icon={faEnvelope}/>info@ecomgleam.com</p>
            <p>career@ecomgleam.com</p>
            </div>
        </div>
    </div>
    <div className='line-2'>
        <img src={booking3} alt="" />
    </div>
</div>
 </>
  )
}

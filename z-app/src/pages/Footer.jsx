import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

import {  faLocationDot, faPhone,} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/react-fontawesome'
import footlogo from './imagez/footer logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faLinkedin,
    faTiktok,
    faXTwitter,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <>
    <div className="footer-bg">
      <div className="footer">
      <div className="logo-icons">
         <img src={footlogo} alt="Logo" />
         <div className="icons">
          <i><FontAwesomeIcon icon={faXTwitter} /></i>
         <i><FontAwesomeIcon icon={faTiktok} /></i>
         <i><FontAwesomeIcon icon={faLinkedin} /></i>
         <i><FontAwesomeIcon icon={faYoutube} /></i>
         <i><FontAwesomeIcon icon={faInstagram} /></i>
         </div>

      </div>
      <div className="qiuck-links">
        <p>Quick link</p>
        <div className="page-links">
         <a href='/'>Home</a>
         <a href="/About-us">About us</a>
         <a href="/">Contact us</a>
        </div>
      </div>
      <div className="services">
        <p> OUR SERVICES</p>
        <div className="footer-links">
           <p>  <Link to={'/Amazon-Full-Account-Management-Services'}>Amazon Full Account Management Services</Link></p> 
              <Link to={'/Online-Arbitrage'}>Online Arbitrage & Retail Services</Link>
              <Link to={'/Amazon-Wholesale-FBA'}>Amazon Wholesale FBA Services</Link>
              <Link to={'/3PL-warehouse'}>3PL and Warehousing Services</Link>
              </div>
     </div>
      < div className="contact-info">
         <div className="phone">
              <p>
              <span><FontAwesomeIcon icon={faPhone}/></span>
                <a href='/'>+1 (215) 305-8197</a>
              </p>
         </div>
         <div className="footer-email-info">
              <p>
              <a href='/'> <span><FontAwesomeIcon icon={faLocationDot} /></span>info@ecomgleam.com</a> 
                <a href='/'>career@ecomgleam.com</a>
              </p>
         </div>
         <div className="address-info">
         <img className="footer-icon" src='#' alt="" />
            <p>
            
              <p> <span><FontAwesomeIcon icon={faLocationDot} /></span>USA Office <br />
              5900 BALCONES DR STE 14447 <br />
              AUSTIN, TX 78731, United States</p>
            </p>
         </div>
         <div className="post-address">
         <img className="footer-icon" src='#' alt="" />
            <p>
              <p> <span><FontAwesomeIcon icon={faLocationDot} /></span>USA Office <br />Business Centre,Sharjah Publishing <br />City Free Zone, Sharjah, United Arab <br /> Emirates</p>
            </p>
         </div>
         
      </div>
      
    </div>
    </div>
    </>
  )
}

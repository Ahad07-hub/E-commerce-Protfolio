import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from './imagez/Ecomgleam.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneVolume,faHome,  faFileImage, faFolder,  faFileCsv, faFileCode, faBars, faXmark, faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  let [tab,settab]=useState(0)
  let [burger,setburger]=useState(false)
 


  return (
  <>
  <FontAwesomeIcon/>
  <div className="navbar">
    <div className='logo'><img src={logo} alt="" height={67} /></div>
    <div className='navbar-container'>
    <ul className='links-container'>
        <li><Link to={'/'} className={tab===0 ? 'active' :''} onClick={()=>settab(0)} >Home</Link></li>
        <li><Link to={"/About-us"} className={tab===1 ? 'active' :''} onClick={()=>settab(1)} >About-us</Link></li>
        <li><Link to={"/Contact"} className={tab===2 ? 'active' :''} onClick={()=>settab(2)} >Contact-us</Link></li>
        <li><Link href={"/Service"} className={tab===3 ? 'active' :''} onClick={()=>settab(3)} >Services</Link></li>
        <li><Link href={"/"} className={tab===4 ? 'active' :''} onClick={()=>settab(4)}>Blogs</Link></li>
        <li><Link href={"/"} className={tab===5 ? 'active' :''} onClick={()=>settab(5)} >Case Studies</Link></li>
    </ul>
    <div className='contact'><i class="fa-solid fa-phone-volume"></i> +1 (215) 305-8197</div>
    <div className='burger-icon' onClick={()=>setburger(!burger)} >
       <button> <FontAwesomeIcon icon={faBars} /> </button>
       <div className={burger ? 'burger-menu activeMenu':'burger-menu'}> 
        <button> <FontAwesomeIcon icon={faXmark} /> </button>
        <p  className={tab===0 ? 'active' :''} onClick={()=>settab(0)}>  <FontAwesomeIcon icon={faHome}/> <Link to={'/'}>Home</Link></p>
        <p className={tab===1 ? 'active' :''} onClick={()=>settab(1)}> <FontAwesomeIcon icon={faFileImage}/> <Link to={'/About-us'}>About us</Link></p>
        <p className={tab===2 ? 'active' :''} onClick={()=>settab(2)}> <FontAwesomeIcon icon={faPhoneVolume}/> <Link to={'/Contact'}>Contact-us</Link></p>
        <p className={tab===3 ? 'active' :''} onClick={()=>settab(3)}> <FontAwesomeIcon icon={faFolder}/> <Link to={'/Service'}>Services</Link> </p>
        <p className={tab===4 ? 'active' :''} onClick={()=>settab(4)}> <FontAwesomeIcon icon={faFileCode}/> <Link to={'/'}>Blog</Link></p>
        <p className={tab===5 ? 'active' :''} onClick={()=>settab(5)}> <FontAwesomeIcon icon={faFileCsv}/> <Link to={'/'}>Case Studies</Link> </p>
       <hr />
       <div className='menu-contact'><i class="fa-solid fa-phone-volume"></i> +1 (215) 305-8197</div>
       <div className='menu-email-info'><FontAwesomeIcon icon={faEnvelope}/> info@ecomgleam.com </div>
       <div className='menu-email-info-1'>career@ecomgleam.com</div>
       </div>
       </div>
    </div>
    
  </div>
  </>
  )
}

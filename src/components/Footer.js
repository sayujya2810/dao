import React, { useEffect } from 'react'
import './styles/Footer.css'
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa'
import AOS from 'aos';
import "aos/dist/aos.css"


const Footer = () => {
  useEffect(() => {
  AOS.init({
    duration : 900
  });
}, []);

  return (
    
    <div id='social' class='low-poly' style={{cursor:"none",color:"white", backgroundColor:"black", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"1rem", fontSize:"15px"}}>
      <div id='footer-container'>
        <h1 data-aos={"fade-down"}>Get in touch with us</h1>
        <div style={{margin:"3px 0px"}}>
          {/* Icons */}
          <a target='_blank'><FaTwitter data-aos={"slide-right"} style={{backgroundColor:"none" , borderRadius:"50%", border: "2px solid", fontSize:"30px", padding:"3px", margin:"5px" }}  className='icons-f'   /></a>
          <a target='_blank'><FaInstagram data-aos={"fade-up"} style={{backgroundColor:"none" , borderRadius:"50%", border: "2px solid", fontSize:"30px", padding:"3px", margin:"5px"}}  className='icons-f'   /></a>
          <a target='_blank'><FaDiscord data-aos={"slide-left"} style={{backgroundColor:"none" , borderRadius:"50%", border: "2px solid", fontSize:"30px", padding:"3px", margin:"5px" }} className='icons-f'  /></a>

        </div>
        <p data-aos={"fade-up"} style={{fontSize:"12px"}} >MADE IN INDIA</p>
        <p data-aos={"fade-up"}>Copyright © Decetralized Autonomous Organization. All rights reserved</p>
        </div>
    </div>
  )
}



export default Footer
import React from 'react'
import './styles/Footer.css'
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa'



const Footer = () => {

  return (
    
    <div id='social' class='low-poly' style={{cursor:"none",color:"white", backgroundColor:"black", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"1rem", fontSize:"15px"}}>
      <div id='footer-container'>
        <h1>Get in touch with us</h1>
        <div style={{margin:"3px 0px"}}>
          {/* Icons */}<a href='https://twitter.com/daughtersofcryp' target='_blank'><FaTwitter style={{backgroundColor:"none" , borderRadius:"50%", border: "2px solid", fontSize:"30px", padding:"3px", margin:"5px" }}  className='icons-f'   /></a>
        <a  href='https://www.instagram.com/daughtersofCrypto/' target='_blank'><FaInstagram style={{backgroundColor:"none" , borderRadius:"50%", border: "2px solid", fontSize:"30px", padding:"3px", margin:"5px"}}  className='icons-f'   /></a>
        <a  href='https://discord.com/invite/daughtersofcrypto' target='_blank'><FaDiscord style={{backgroundColor:"none" , borderRadius:"50%", border: "2px solid", fontSize:"30px", padding:"3px", margin:"5px" }} className='icons-f'  /></a>

        </div>
        <p style={{fontSize:"12px"}} >2093 PHILADELPHIA PIKE #7192
        CLAYMONT, DE19703</p>
        <p>Copyright © Daughters of Crypto. All rights reserved</p>
        </div>
    </div>
  )
}



export default Footer
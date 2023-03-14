import React, { useState } from 'react'
import './styles/Navbar.css'
import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link as Linked} from 'react-scroll'
import { Route, Routes, Link  } from 'react-router-dom';
import Vote from './Vote';
// import Mint from './Mint';


const Navbar = (props) => {

  const [walletAddress, setWalletAddress] = useState("Connect Wallet")

  const setFlag = props.child1
  const setUserAddress = props.userAddress
  const userAddress = props.settingAddress

    // const alertMe = () => {
    //   alert("Connect Btn clicked")
    // }

    async function requestAccount() {
    console.log('Requesting account...');

    // ❌ Check if Meta Mask Extension exists 
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // setWalletAddress(accounts[0]);
        setUserAddress(accounts[0])
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }
    

    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img id="logo" src='./images/log3.png' alt='company logo' />
        </div>
        

        


        {/* 2nd menu part  */}
        <div
          className={ showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"} >
          <ul>
            
            <li>
              {/* <a href='./Main'>Home</a> */}
              <Linked style={{textDecoration: "none"}} className='cursor hover-underline-animation' to='main' >Home</Linked>
            </li>
            <li>
              {/* <a  href='./Intro'>about</a> */}
              <Linked style={{textDecoration: "none"}} className='cursor hover-underline-animation' to='intro'>Intro</Linked>
            </li>
            <li>
              {/* <a  href='./Intro'>about</a> */}
              <Linked style={{textDecoration: "none"}} className='cursor hover-underline-animation' to='about'>About</Linked>
            </li>
            <li>
              {/* <a href='#'>Timeline</a> */}
              <Linked style={{textDecoration: "none"}} className='cursor hover-underline-animation' to='timeline'>Roadmap</Linked>
            </li>
            <li>
              {/* <a href='#'>FAQ</a> */}
              <Linked style={{textDecoration: "none"}} className='cursor hover-underline-animation' to='faq-section'>FAQ</Linked>
            </li>
            <li>
              {/* <a href='#'>Team</a> */}
              <Linked style={{textDecoration: "none"}} className='cursor hover-underline-animation' to='team'>Team</Linked>
            </li>
            <li>
              {/* <a href='#'>Team</a> */}
              <Linked style={{textDecoration: "none"}} className='cursor hover-underline-animation' to='social'>Social</Linked>
            </li>
            <li>
              {/* <a href='#'>Team</a> */}
              <a href="/vote" style={{textDecoration: "none"}} className='cursor hover-underline-animation' >Vote</a>
            </li>
          </ul>
        </div>

        
        

        {/* 3rd social media links */}
        <div className="social-media">
          {/* <ul className="social-media-desktop">
            <li><a href='https://twitter.com/daughtersofcryp' target='_blank'><FaTwitter  className='icons'   /></a></li>
            <li><a  href='https://www.instagram.com/daughtersofCrypto/' target='_blank'><FaInstagram className='icons'   /></a></li>
            <li><a  href='https://discord.com/invite/daughtersofcrypto' target='_blank'><FaDiscord  className='icons'  /></a></li>         
          </ul> */}

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu color='#FF3434' />
            </a>
          </div>
        </div>

      </nav>
  )
}

export default Navbar
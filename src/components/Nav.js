import React, { useState } from 'react'
import './styles/Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import {Link as Linked} from 'react-scroll'


const Navbar = (props) => {

    console.log(props)


    // const alertMe = () => {
    //   alert("Connect Btn clicked")
    // }

    const setWalletAddress = props.setUserAddress;
    const walletAddress = props.userAddress;
    const setNav = props.settingNav;
    const isAdmin = props.admin;

    async function requestAccount() {
    console.log('Requesting account...');

    // Check if Meta Mask Extension exists 
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        }); 
        // setWalletAddress(accounts[0]);
        setWalletAddress(accounts[0])
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }

  const handleNav = (navigation) => {
    if(walletAddress === null || walletAddress === "Connect" ){
        alert("Please Connect your wallet first!");
    }
    else{
        setNav(navigation)
    }
  }
    

    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img id="logo" src='./images/logo.png' alt='company logo' />
        </div>
        

        


        {/* 2nd menu part  */}
        <div
          className={ showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"} >
          <ul>
            
            <li>
              <a href='/' style={{textDecoration: "none"}} className='cursor hover-underline-animation' to='main' >Home</a>
            </li>
            {
                isAdmin === true ? 
                        <li>
                            <a onClick={() => handleNav("admin")} style={{textDecoration: "none"}} className='cursor hover-underline-animation'>Admin</a>
                        </li> : ""
            }

            <li>
              <a onClick={() => handleNav("createPost")} style={{textDecoration: "none"}} className='cursor hover-underline-animation'>Create Posts</a>
            </li>
            <li>
              <a onClick={() => handleNav("myPosts")} style={{textDecoration: "none"}} className='cursor hover-underline-animation' >My Posts</a>
            </li>
            <li>
              <a onClick={() => handleNav("allPosts")} style={{textDecoration: "none"}} className='cursor hover-underline-animation' >All Posts</a>
            </li>
            <li>
                <div id='connect-wallet'>
                    <button id='connect-wallet-btn' onClick={requestAccount} >{walletAddress}</button>
                </div>
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
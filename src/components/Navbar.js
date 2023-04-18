import React, { useState } from 'react'
import './styles/Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import {Link as Linked} from 'react-scroll'
import {Link, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';
import { ethers } from 'ethers';
// import Mint from './Mint';


const Navbar = (props) => {


  const [trucatedAddress, setTrucatedAddress] = useState("Connect")
  // const [auth, setAuth] = useState(0)
  const setUserAddress = props.userAddress
  const userAddress = props.settingAddress


  const auth = props.auth
  const setAuth = props.setAuth

    // const alertMe = () => {
    //   alert("Connect Btn clicked")
    // }

    // const provider = new ethers.providers.Web3Provider(window.ethereum);

    if(window.ethereum){
      window.ethereum.on('accountsChanged', (accounts) => {
        // alert(accounts.length)
        if(accounts.length > 0){
          requestAccount()
        }
        else{
          setAuth(0)
          setUserAddress("Connect")
        }
      });

      window.ethereum.on("chainChanged" , async(accounts) => {
        if(accounts.length > 0){
          window.location.reload()
          switchNetworkPolygon()
        }
        else{
        }
      })
      // window.ethereum._metamask.isUnlocked().then(res => console.log(res))
    }
    
  //   const setAccountListener = (provider) => {
  //     provider.on("accountsChanged", () => window.location.reload());
  //     provider.on("chainChanged", () => window.location.reload());
  //   };

  //   useEffect(() => {
  //    // Load provider

  //     if (provider) {
  //       setAccountListener(provider);
  //       // add more logic
  //     } else {
        
  //       console.error("Please, install Metamask.");
  //     }

  // }, []);

    const getbalanceOf = async() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address[]","name":"_to","type":"address[]"}],"name":"Airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"MetadataUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"Mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]
        const contractAddress = "0xb152A8318E63560E87C35220FB45DC87d8E7bb5C";
        const contract = new ethers.Contract(contractAddress, abi, provider);
        const tx = await contract.balanceOf(userAddress); // use this to check whether the owner alreadys owns a nft or not
        // console.log("Auth : " + parseInt(tx))
        setAuth(parseInt(tx))
        // use this on the landing page before allowing them to use posts or proposals
        // also use this to check the wallet addresse given in the input field in the mint and airdrop function to make sure no wallet is sent 2 NFTs
    };




       const switchNetworkPolygon = async() => {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x13881" }],
          });
          // window.location.reload(false)
        } catch (error) {
          if (error.code === 4902) {
            try {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: "0x13881",
                    chainName: "Polygon Testnet",
                    rpcUrls: ["https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78"],
                    nativeCurrency: {
                      name: "MATIC",
                      symbol: "MATIC",
                      decimals: 18,
                    },
                    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
                  },
                ],
              });
              window.location.reload(false)
            } catch (error) {
              alert(error.message);
            }
          }
        }
      }

    // window.onbeforeunload = (e) =>{
    // // logout();
    // }

    useEffect(() => {
      var addr = userAddress
      // var addr = walletAddress
      addr = truncate(addr)
      setTrucatedAddress(addr)
    },[userAddress,setUserAddress])

    useEffect(() => {
      getbalanceOf()
    }, [userAddress,setUserAddress])



    // useEffect(() => {
    //   if(auth >= 1){
    //     alert("You are authorized")
    //   }
    //   else{
    //     alert("you are not authorized")
    //   }
    // }, [getbalanceOf])
    
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
    }
     else {
      alert('Meta Mask not detected');
    }
  }

  function truncate(addressString) {
      if (addressString )
        return addressString.slice(0, 5) + '...' + addressString.slice(39);
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
              <Linked style={{textDecoration: "none"}} className='cursor hover-underline-animation' to='implinks'>Links</Linked>
            </li>
            <li>
              {/* <a href='#'>Team</a> */}
              <Linked style={{textDecoration: "none"}} className='cursor hover-underline-animation' to='social'>Social</Linked>
            </li>
            {
              auth > 0 ? 
              <>
              <li>
                {/* <a href='#'>Team</a> */}
                <Link to="vote" style={{textDecoration: "none"}} className='cursor hover-underline-animation' >Post</Link>
              </li>
                <li>
                  <Link to="propose" style={{textDecoration: "none"}} className='cursor hover-underline-animation' >Propose</Link>
                </li>
              </>
              : <p style={{color:"#ff4a4a", marginTop:"15px"}}>Unauthorized</p>
            }
            <li>
                <div id='connect-wallet'>
                    <button id='connect-wallet-btn' onClick={requestAccount} >{
                      trucatedAddress === "Conne..." ? "Connect" : trucatedAddress
                    }</button>
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
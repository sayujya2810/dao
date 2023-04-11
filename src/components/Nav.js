import React, { useEffect, useState } from 'react'
import './styles/Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import {Link as Linked} from 'react-scroll'
import { ethers } from 'ethers';
import { type } from '@testing-library/user-event/dist/type';
import { useNavigate } from 'react-router-dom';


const Navbar = (props) => {

  const [balance, setBalance] = useState(0)
  const [balanceText, setBalanceText] = useState("Funds")
  const setWalletAddress = props.setUserAddress;
    const walletAddress = props.userAddress;
    const setNav = props.settingNav;
    const isAdmin = props.admin;
    const [trucatedAddress, setTrucatedAddress] = useState("Connect")
    const [userBalance, setUserBalance] = useState(0)
    const navigate = useNavigate();
    const setAuth = props.settingAuth
    const auth = props.authState
    const navType = props.nav

  useEffect(() => {
    const bal = getBalance()
    bal.then(res => setBalance(ethers.utils.formatEther(res)))
  })

  

  // if(window.ethereum){
  //     window.ethereum.on('accountsChanged', () => {
  //        requestAccount()
  //        getbalanceOf()
  //       //  alert(auth)
  //     });
  //     // window.ethereum._metamask.isUnlocked().then(res => console.log(res))
  //   }


  // Get user balance / wallet balance
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider.getBalance(walletAddress).then((balance) => {
      const bal = ethers.utils.formatEther(balance)
      setUserBalance(bal.slice(0,5))
    })
  },[walletAddress, setWalletAddress])


const getBalance = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"_proid","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"},{"internalType":"string","name":"_uri","type":"string"},{"internalType":"uint256","name":"_pamt","type":"uint256"}],"name":"createPro","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"postRegistry","outputs":[{"internalType":"uint256","name":"postid","type":"uint256"},{"internalType":"address","name":"postOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"postsOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposalRegistry","outputs":[{"internalType":"uint256","name":"proid","type":"uint256"},{"internalType":"address","name":"proOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"uint256","name":"pamt","type":"uint256"},{"internalType":"bool","name":"claim_status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"prosOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_proId","type":"uint256"}],"name":"pvoteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_proId","type":"uint256"}],"name":"pvoteUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalposts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalproposals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
    const contractAddress = "0x7bcc3D0BC6461077121ECD39A558c62d13dAcA53";
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const tx = await contract.getBalance(); //display it on all the pages left hand side corner as DAO funds
    console.log("balance:" + tx)
    return tx;
};

const showBalance = () => {
  setBalanceText(balance + " MATIC")
} 
const hideBalance = () => {
  setBalanceText("Funds")
} 
    // console.log(props)


    // const alertMe = () => {
    //   alert("Connect Btn clicked")
    // }

const getbalanceOf = async() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address[]","name":"_to","type":"address[]"}],"name":"Airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"MetadataUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"Mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]
        const contractAddress = "0xb152A8318E63560E87C35220FB45DC87d8E7bb5C";
        const contract = new ethers.Contract(contractAddress, abi, provider);
        const tx = await contract.balanceOf(walletAddress); // use this to check whether the owner alreadys owns a nft or not
        console.log(parseInt(tx))
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
    

    function truncate(addressString) {
      if (addressString )
        return addressString.slice(0, 5) + '...' + addressString.slice(39);
    }

    useEffect(() => {
      var addr = walletAddress
      addr = truncate(addr)
      setTrucatedAddress(addr)

    },[walletAddress,setWalletAddress])

    async function requestAccount() {
    console.log('Requesting account...');

    // Check if Meta Mask Extension exists 
    if(window.ethereum) {
      console.log('detected');

      try {
        // try{
        // }
        // catch(e){
        //   alert("Add and switch to Polgon Mumbai Testnet")
        // }
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        }); 

        // setWalletAddress(accounts[0]);
        setWalletAddress(accounts[0])
        getbalanceOf()
        // switchNetworkPolygon()
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
          <img id="logo" src='./images/log3.png' alt='company logo' />
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
                            <a onClick={() => handleNav("admin")} style={{textDecoration: "none"}} className='cursor hover-underline-animation'>Add User</a>
                        </li> : ""
            }

            {
              navType === "proposal" ? 

              <>
                <li>
                  <a onClick={() => handleNav("createPro")} style={{textDecoration: "none"}} className='cursor hover-underline-animation'>Create Proposals</a>
                </li>
                <li>
                  <a onClick={() => handleNav("myPro")} style={{textDecoration: "none"}} className='cursor hover-underline-animation' >My Proposals</a>
                </li>
                <li>
                  <a onClick={() => handleNav("allPro")} style={{textDecoration: "none"}} className='cursor hover-underline-animation' >All Proposals</a>
                </li>
                <li>
                  <a onClick={() => handleNav("searchPro")} style={{textDecoration: "none"}} className='cursor hover-underline-animation' >Search Proposal</a>
                </li>
                <li>
                  <a style={{textDecoration: "none"}} className='cursor hover-underline-animation' onClick={() => handleNav("funds")} onMouseEnter={showBalance} onMouseLeave={hideBalance} > {balanceText}</a>
                </li>
              </>
              : navType === "vote" ? 

              <>
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
                    <a onClick={() => handleNav("search")} style={{textDecoration: "none"}} className='cursor hover-underline-animation' >Search Post</a>
                </li>
              </> : null
            }

              <li>
                <div id='connect-wallet'>
                    <button id='connect-wallet-btn' onClick={requestAccount} >{
                      trucatedAddress === "Conne..." ? "Connect" : trucatedAddress
                    }</button>
                  </div>
              </li>
            <button id='connect-wallet-btn' > {userBalance} MATIC</button>
            
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
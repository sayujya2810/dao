import React, { useState } from 'react'
import Moralis from 'moralis'
import "./styles/Mint.css"
import Popup from 'reactjs-popup'

const Mint = (props) => {

  window.onbeforeunload = (e) =>{
    logout();
  }

  const setFlag = props.childchild1  
  const setUserAddress = props.userAddressInner




let address = null

    // const serverUrl = "https://xallyeig5cxf.usemoralis.com:2053/server";
    const serverUrl = "https://hwlskb8xmzpc.usemoralis.com:2053/server";
     const appId = "J1TfOOvnJPYjp8pfo7WUrR2BrIiMU89zbdZUBqwu";
     Moralis.start({ serverUrl, appId });   


     function truncate(addressString) {
      if (addressString)
        return addressString.slice(0, 5) + '...' + addressString.slice(38);
    }
     
     

    // add from here down
     async function login() {
        let user = Moralis.User.current();
        if (!user) {
          try{
          user = await Moralis.authenticate({signingMessage: "Authenticate"});
          await Moralis.enableWeb3()
          address = user.get('ethAddress')
          setUserAddress(address)
          let short_address = truncate(address)
          const addressBtn = document.getElementById("addressBtn");
          addressBtn.textContent = short_address
          // logoutDrop.textContent = address
          // dropDown.placeholder = address

          // const loginBtn = document.getElementById("btn-login");
          // loginBtn.style.display = "none";
      


          
          // loginBtn.style.opacity = "0";
          

        } catch(error) {
        console.log(error);
        }
      }
    }

    function triggerLogin(event){
      login()
      // console.log("logged in")
    }
    function triggerLogout(event){
      logout()
      // console.log("Logged Out here")
      setFlag(false)
      // console.log("Set false")
    }

    

     async function logout() {
        await Moralis.User.logOut();
        // console.log("logged out");
        const addressBtn = document.getElementById("addressBtn");
        addressBtn.textContent = "Connect Wallet"
        address = "";
        const loginBtn = document.getElementById("btn-login");
        
          loginBtn.style.display = "block";
          // loginBtn.style.opacity = "1";
      }

     async function switchNetworkGnosis() {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x64" }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x64",
                chainName: "Gnosis Chain",
                rpcUrls: ["https://rpc.gnosischain.com/"],
                nativeCurrency: {
                  name: "Matic",
                  symbol: "xDai",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://blockscout.com/xdai/mainnet/"],
              },
            ],
          });
        } catch (error) {
          alert(error.message);
        }
      }
    }
  }



  return (
    // <div id='mint-section' style={{zIndex:19, padding:"0px",margin:"0px"}}  onLoad={logout}>
      <Popup arrow={false} style={{backgroundColor:"black", display:"relative", justifyContent:"flex-start"}} trigger={<button id="addressBtn" style={{ borderRadius: "5px", backgroundColor:"white" ,color:"black", fontSize:"13px" ,padding:".2rem", marginRight:"1rem", marginTop:"1rem", position:"relative", width: "8rem"}}>Connect Wallet</button>} >
        <div className='btnGroup' >
          <button id="btn-login" style={{ 
          backgroundColor:"white",
          borderRadius: "5px", 
          color:"black",
          margin:"5px",
          padding:"1rem"
          }} onClick={triggerLogin}>Login</button>


        <button id="btn-logout" onClick={triggerLogout} style={{
        backgroundColor:"white",
        borderRadius: "5px", 
        color:"black", 
        padding:"1rem",
        margin:"5px"
        }}>Logout</button>
        </div>



      </Popup>
    // </div>
  )
}

export default Mint
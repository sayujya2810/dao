import React from 'react'
import "../components/styles/Welcome.css"

const Welcome = () => {
  return (
    <div id='encloser' style={{minHeight:"85vh",display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
      <div id='left' style={{backgroundColor:"white", padding:"2rem", borderRadius:"5px"}}>
        <h1 style={{color:"black"}}>Get you Plans approved!</h1>
        <hr style={{color:"black"}} />
        <p style={{color:"black"}}>1. Connect your <span style={{color:"black", fontStyle:"oblique"}}>Metamask Wallet</span></p>
        <p style={{color:"black"}}>2. To publish your own proposal on line, click on <span style={{color:"black", fontWeight:"bold"}}>"Create Proposal"</span>. </p>
        <p style={{color:"black"}}>3. View your proposals by clicking on <span style={{color:"black", fontWeight:"bold"}}>"My Proposal"</span>.</p>
        <p style={{color:"black"}}>4. To view global proposals, click on <span style={{color:"black", fontWeight:"bold"}}>"All Proposal"</span>.</p>
      </div>
      <div id='right'>
        <img id="voting" src='./images/voting.svg' />
      </div>
    </div>

  )
}

export default Welcome
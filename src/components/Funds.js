import { ethers } from 'ethers'
import React from 'react'
import { useState } from 'react'
import {TbMoneybag} from "react-icons/tb"

const Funds = () => {

    const [funds, setFunds] = useState(0)

    const fund = async() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const abi = [{"inputs":[{"internalType":"address payable","name":"_to","type":"address"}],"name":"sendViaCall","outputs":[],"stateMutability":"payable","type":"function"}]
        const contractAddress = "0x37C2121B028D244B4B432f028C93C8Af7c96Db1D";
        const contract = new ethers.Contract(contractAddress, abi, signer);
        const value1 = ethers.utils.parseEther(funds.toString());// get the ether value (0.0005) in decimal in the input field
        const tx = await contract.sendViaCall("0x765E42272F9977196175eAE15F175937995cFc15",{value: value1}); 
        const receipt = await tx.wait();
    }

  return (
    <div style={{ height:"90vh", display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <div style={{  height:"20vh",display:"flex",justifyContent:"space-between",width:"100%", flexDirection:"column"}}>
            <h1>Deposit Funds</h1>
            <div style={{display:"flex",justifyContent:"center", width:"100%"}}>
                <input style={{color:"black",padding:".5rem", borderRadius:"5px", width:"30%", marginRight:"1rem"}} type="number" step="0.001" min="0.001" onChange={(e) => setFunds(e.target.value)} placeholder='Funds'/>
                <button style={{backgroundColor:"black", borderRadius:"5px", padding:".5rem", textAlign:"center"}} onClick={fund}><TbMoneybag  /></button>
            </div>
        </div>
    </div>
  )
}

export default Funds
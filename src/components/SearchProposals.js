import { ethers } from 'ethers'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FiArrowDown, FiArrowUp} from "react-icons/fi"
import "../components/styles/Team.css"
import { Alert, Snackbar } from '@mui/material'
import CryptoJS from 'crypto-js'

const SearchProposals = () => {

    const [query, setQuery] = useState("")
    const [result,setResult] = useState({})
    const [open, setOpen] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [openWarning, setOpenWarning] = useState(false)
    const handleClose = () => setOpen(false);
    const handleCloseError = () => setOpenError(false);
    const handleCloseWarning = () => setOpenWarning(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [decryptedMessage, setDecryptedMessage] = useState("")
    const [decryptedCategory, setDecryptedCategory] = useState("")
    const [decryptedIpfsHash, setDecryptedIpfsHash] = useState("")


    const decryptHex = (_cipher) => {
      try{
        var decryptedMessage = CryptoJS.AES.decrypt(_cipher, process.env.REACT_APP_ENCRYPTION_KEY)
        var hex = decryptedMessage.toString()
        var str = ''
        for (var n = 0; n < hex.length; n += 2) {
          str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
        }
        console.log("Str : " + str)
        return str
      }
      catch(err){}
    }

    const handleClick = () => {
        setOpen(true);
    };

    const handleErrorClick = () => {
        setOpenError(true);
    }

    const handleWarningClick = () => {
        setOpenWarning(true)
    }
    
    const getProposal = async (_id) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"_proid","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"},{"internalType":"string","name":"_uri","type":"string"},{"internalType":"uint256","name":"_pamt","type":"uint256"}],"name":"createPro","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"postRegistry","outputs":[{"internalType":"uint256","name":"postid","type":"uint256"},{"internalType":"address","name":"postOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"postsOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposalRegistry","outputs":[{"internalType":"uint256","name":"proid","type":"uint256"},{"internalType":"address","name":"proOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"uint256","name":"pamt","type":"uint256"},{"internalType":"bool","name":"claim_status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"prosOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_proId","type":"uint256"}],"name":"pvoteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_proId","type":"uint256"}],"name":"pvoteUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalposts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalproposals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
    const contractAddress = "0x765E42272F9977196175eAE15F175937995cFc15";
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const tx = await contract.proposalRegistry(_id); //edit 
    return tx;
  };

    const search = (_id) => {
        getProposal(_id).then(res => setResult(res))
    }

    useEffect(() => {
      if(result !== null){
        const category = decryptHex(result[4])
        const message = decryptHex(result[7])
        const ipfsHash = decryptHex(result[8])
        setDecryptedCategory(category)
        setDecryptedMessage(message)
        setDecryptedIpfsHash(ipfsHash)
      }
    },[result,setResult])

    

  const curr = () => {
    const unix = Math.round(+new Date()/1000);
    return unix
  }

    const  pvoteUp = async (_id, _endTime) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"_proid","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"},{"internalType":"string","name":"_uri","type":"string"},{"internalType":"uint256","name":"_pamt","type":"uint256"}],"name":"createPro","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"postRegistry","outputs":[{"internalType":"uint256","name":"postid","type":"uint256"},{"internalType":"address","name":"postOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"postsOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposalRegistry","outputs":[{"internalType":"uint256","name":"proid","type":"uint256"},{"internalType":"address","name":"proOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"uint256","name":"pamt","type":"uint256"},{"internalType":"bool","name":"claim_status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"prosOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_proId","type":"uint256"}],"name":"pvoteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_proId","type":"uint256"}],"name":"pvoteUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalposts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalproposals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
    const contractAddress = "0x765E42272F9977196175eAE15F175937995cFc15";
    const contract = new ethers.Contract(contractAddress, abi, signer);

    if(curr() > _endTime ){
      setErrorMessage("Post Timed out, you cannot vote.")
      handleWarningClick()
      // alert("Post Timed out, you cannot vote.")
    }
    else{
      try{
        const tx = await contract.pvoteUp(_id); // done editing
        const receipt = await tx.wait();
        handleClick()
      }
      catch(err){
        alert(err)
      } 
    }
};
  const  pvoteDown = async (_id, _endTime) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"_proid","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"},{"internalType":"string","name":"_uri","type":"string"},{"internalType":"uint256","name":"_pamt","type":"uint256"}],"name":"createPro","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"postRegistry","outputs":[{"internalType":"uint256","name":"postid","type":"uint256"},{"internalType":"address","name":"postOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"postsOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposalRegistry","outputs":[{"internalType":"uint256","name":"proid","type":"uint256"},{"internalType":"address","name":"proOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"uint256","name":"pamt","type":"uint256"},{"internalType":"bool","name":"claim_status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"prosOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_proId","type":"uint256"}],"name":"pvoteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_proId","type":"uint256"}],"name":"pvoteUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalposts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalproposals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
    const contractAddress = "0x765E42272F9977196175eAE15F175937995cFc15";
    const contract = new ethers.Contract(contractAddress, abi, signer);

    if(curr() > _endTime ){
      setErrorMessage("Post Timed out, you cannot vote.")
      handleWarningClick()
      // alert("Post Timed out, you cannot vote.")
    }
    else{
      try{
        const tx = await contract.pvoteDown(_id); // done editing
        const receipt = await tx.wait();
        handleClick()
      }
      catch(err){
        alert(err)
      } 
    }
};
  const parseTime = (_d) =>{

  console.log("_d; " + _d)
  var date = new Date(_d*1000);
  return date.toLocaleTimeString("it-IT");   
}

const parseDate = (_d) =>{
  var date = new Date(_d*1000);
  // var date = new Date(d*17.395);
  return date.toLocaleDateString("en-GB")
}



  return (
    <div style={{height:"90vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <div id='searchbar' style={{display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"1rem", width:"60%"}}>
            <input onChange={e => setQuery(e.target.value)} type='text' style={{color:"black",padding:".5rem", borderRadius:"5px", width:"60%", marginRight:"1rem"}} placeholder='Search by ID' />
            <button style={{backgroundColor:"black", borderRadius:"5px", padding:".5rem", textAlign:"center"}} onClick={() => search(query)}><AiOutlineSearch  /></button>
        </div>
        <div className='team'>
            {
            result !== null ? 
            <div key={parseInt(result[0],16)} className="team_member card">
                  <span style={{backgroundColor:"white", borderRadius:"3px", color:"black", padding:"3px", marginBottom:"10px"}}>Proposal ID: {parseInt(result[0],16)}</span>
                  {/* <span style={{backgroundColor:"white", borderRadius:"3px", color:"black", padding:"3px", marginBottom:"3px"}}>{result[4]}</span> */}
                <div style={{display:"flex", justifyContent:"space-between"}}>
                  <span style={{border:"1px white solid", borderRadius:"3px", color:"white", padding:"3px", marginBottom:"3px" }}>{parseDate(result[5]) }</span>
                  <span style={{border:"1px white solid", borderRadius:"3px", color:"white", padding:"3px", marginBottom:"3px" }}>{parseDate(result[6]) }</span>
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                  <span style={{border:"1px white solid", borderRadius:"3px", color:"white", padding:"3px", marginBottom:"3px" }}>{parseTime(result[5]) }</span>
                  <span style={{border:"1px white solid", borderRadius:"3px", color:"white", padding:"3px", marginBottom:"3px"}}>{parseTime(result[6]) }</span>
                </div>
                <span style={{ borderRadius:"3px", color:"white", padding:"3px", marginTop:"9px", border: "1px white solid"}}>{decryptedCategory}</span>
                <div style={{display:"flex", justifyContent:"space-between", marginTop:"9px"}}>
                  <a href={"https://ipfs.io/ipfs/" + decryptedIpfsHash} style={{border:"1px white solid", borderRadius:"3px", color:"white", padding:"3px", marginBottom:"3px", textDecoration:"none", width:"45%"}} target="_blank">Blueprint</a>
                  <span style={{border:"1px white solid", borderRadius:"3px", color:"white", padding:"3px", marginBottom:"3px", width:"45%" }}>{parseInt(result[9]) / 1000000000000000000} MATIC</span>
                </div>
                {/* Message */}
                <p className="message"> {decryptedMessage}</p>
                
                <div style={{ marginTop:"auto"}}>
                  {
                    curr() > result[6] ? <button className='voting-btn cursor-disabled' onClick={() => pvoteUp(parseInt(result[0],16), result[6])}> <FiArrowUp /> ({result[2]}) </button> : <button className='voting-btn' onClick={() => pvoteUp(parseInt(result[0],16), result[6])}> <FiArrowUp /> ({result[2]}) </button>
                  }
                  {
                    curr() > result[6] ? <button className='voting-btn cursor-disabled'  onClick={() => pvoteDown(parseInt(result[0],16), result[6])}><FiArrowDown />({result[3]})</button> : <button className='voting-btn' onClick={() => pvoteDown(parseInt(result[0],16), result[6])}><FiArrowDown />({result[3]})</button>
                  }
                </div>
              </div>

               :
             null
        }
        </div>
        <Snackbar open={openError} autoHideDuration={4000} onClose={handleCloseError}>
            <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%', backgroundColor:"red" }}>
            {errorMessage}
            </Alert>
        </Snackbar>
        <Snackbar open={openWarning} autoHideDuration={4000} onClose={handleCloseWarning}>
            <Alert onClose={handleCloseWarning} severity="warning" sx={{ width: '100%', backgroundColor:"#b88d00",  }}>
            {errorMessage}
            </Alert>
        </Snackbar>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor:"green",  }}>
            Voted Successfully!
            </Alert>
        </Snackbar>
    </div>
  )
}

export default SearchProposals
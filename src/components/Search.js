import { ethers } from 'ethers'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {FiArrowDown, FiArrowUp} from "react-icons/fi"
import "../components/styles/Team.css"
import { Alert, Snackbar } from '@mui/material'
import CryptoJS from 'crypto-js'
import { AiOutlineSearch } from 'react-icons/ai'


const Search = () => {
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
    
    useEffect(() => {
      if(result !== null){
        const category = decryptHex(result[4])
        const message = decryptHex(result[7])
        const ipfsHash = decryptHex(result[8])
        setDecryptedCategory(category)
        setDecryptedMessage(message)
      }
    },[result,setResult])


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
    
    const getPost = async (_id) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"postRegistry","outputs":[{"internalType":"uint256","name":"postid","type":"uint256"},{"internalType":"address","name":"postOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"postsOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalposts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteUp","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        const contractAddress = "0x765E42272F9977196175eAE15F175937995cFc15";
        const contract = new ethers.Contract(contractAddress, abi, provider);
        const tx = await contract.postRegistry(_id); //edit --> done 
        return tx;
        // console.log("tx: " + tx[0])
    };

    const search = (_id) => {
        getPost(_id).then(res => setResult(res))
    }

    const voteDown = async (_id, _endTime) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"postRegistry","outputs":[{"internalType":"uint256","name":"postid","type":"uint256"},{"internalType":"address","name":"postOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"postsOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalposts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteUp","outputs":[],"stateMutability":"nonpayable","type":"function"}]

    const contractAddress = "0x765E42272F9977196175eAE15F175937995cFc15";
    const contract = new ethers.Contract(contractAddress, abi, signer);

    if(curr() > _endTime ){
      setErrorMessage("Post Timed out, you cannot vote.")
      handleWarningClick()
    }
    else{
      try{
        const tx = await contract.voteDown(_id); //edit 
        const receipt = await tx.wait();

      }
      catch(err){
        console.log(err)
      } 
    }
    
  };

  const curr = () => {
    const unix = Math.round(+new Date()/1000);
    return unix
  }

  const voteUp = async (_id, _endTime) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"postRegistry","outputs":[{"internalType":"uint256","name":"postid","type":"uint256"},{"internalType":"address","name":"postOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"postsOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalposts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteUp","outputs":[],"stateMutability":"nonpayable","type":"function"}]

    const contractAddress = "0x765E42272F9977196175eAE15F175937995cFc15";
    const contract = new ethers.Contract(contractAddress, abi, signer);

    if(curr() > _endTime ){
      setErrorMessage("Post Timed out, you cannot vote.")
      handleWarningClick()
      // alert("Post Timed out, you cannot vote.")
    }
    else{
      try{
        const tx = await contract.voteUp(_id); //edit --> done 
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
                  <span style={{backgroundColor:"white", borderRadius:"3px", color:"black", padding:"3px", marginBottom:"10px"}}>Post ID: {parseInt(result[0],16)}</span>
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

                {/* Message */}
                <p className="message"> {decryptedMessage}</p>
                
                <div style={{ marginTop:"auto"}}>
                  {
                    curr() > result[6] ? <button className='voting-btn cursor-disabled' onClick={() => voteUp(parseInt(result[0],16), result[6])}> <FiArrowUp /> ({result[2]}) </button> : <button className='voting-btn' onClick={() => voteUp(parseInt(result[0],16), result[6])}> <FiArrowUp /> ({result[2]}) </button>
                  }
                  {
                    curr() > result[6] ? <button className='voting-btn cursor-disabled'  onClick={() => voteDown(parseInt(result[0],16), result[6])}><FiArrowDown />({result[3]})</button> : <button className='voting-btn' onClick={() => voteDown(parseInt(result[0],16), result[6])}><FiArrowDown />({result[3]})</button>
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

export default Search
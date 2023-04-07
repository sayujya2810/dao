import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import "../components/styles/Team.css"
import {FiArrowDown, FiArrowUp} from "react-icons/fi"
import { Alert, Button, Snackbar } from '@mui/material'

const AllProposals = (props ) => {


  const address = props.userAddress

  const [proposalIdHex, setProposalIdHex] = useState([])
  const [proposalId, setProposalId] = useState([])
  const [numProposal, setNumProposal] = useState(0)
  const [proposals, setProposals] = useState([])

  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openWarning, setOpenWarning] = useState(false)
  const handleClose = () => setOpen(false);
  const handleCloseError = () => setOpenError(false);
  const handleCloseWarning = () => setOpenWarning(false)
  const [errorMessage, setErrorMessage] = useState("")
  const handleClick = () => {
      setOpen(true);
  };

  const totalproposals = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"_proid","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"},{"internalType":"string","name":"_uri","type":"string"},{"internalType":"uint256","name":"_pamt","type":"uint256"}],"name":"createPro","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"postRegistry","outputs":[{"internalType":"uint256","name":"postid","type":"uint256"},{"internalType":"address","name":"postOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"postsOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposalRegistry","outputs":[{"internalType":"uint256","name":"proid","type":"uint256"},{"internalType":"address","name":"proOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"uint256","name":"pamt","type":"uint256"},{"internalType":"bool","name":"claim_status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"prosOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_proId","type":"uint256"}],"name":"pvoteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_proId","type":"uint256"}],"name":"pvoteUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalposts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalproposals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
    const contractAddress = "0x7bcc3D0BC6461077121ECD39A558c62d13dAcA53";
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const tx = await contract.totalproposals();
    return tx
};

   useEffect( () => {
    const num = totalproposals()
    num.then(res => {
        setNumProposal(parseInt(res))
      })
  },[])

  useEffect(() => {

    for(var id = 1 ; id <= numProposal ; id++){
      getProposal(id).then((res) => {
        console.log(res)
        setProposals(proposals => [...proposals, res])
      })
    }
    // getProposal(1).then((res) => console.log(res))
  }, [numProposal, setNumProposal])

  const getProposal = async (_id) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"_proid","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"},{"internalType":"string","name":"_uri","type":"string"},{"internalType":"uint256","name":"_pamt","type":"uint256"}],"name":"createPro","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"postRegistry","outputs":[{"internalType":"uint256","name":"postid","type":"uint256"},{"internalType":"address","name":"postOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"postsOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposalRegistry","outputs":[{"internalType":"uint256","name":"proid","type":"uint256"},{"internalType":"address","name":"proOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"uint256","name":"pamt","type":"uint256"},{"internalType":"bool","name":"claim_status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"prosOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_proId","type":"uint256"}],"name":"pvoteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_proId","type":"uint256"}],"name":"pvoteUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalposts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalproposals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
    const contractAddress = "0x7bcc3D0BC6461077121ECD39A558c62d13dAcA53";
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const tx = await contract.proposalRegistry(_id); //edit 
    return tx;
  };

  const handleErrorClick = () => {
    setOpenError(true);
  }

  const handleWarningClick = () => {
    setOpenWarning(true)
  }
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
const curr = () => {
    const unix = Math.round(+new Date()/1000);
    return unix
  }

  const  pvoteUp = async (_id, _endTime) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"_proid","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"},{"internalType":"string","name":"_uri","type":"string"},{"internalType":"uint256","name":"_pamt","type":"uint256"}],"name":"createPro","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"postRegistry","outputs":[{"internalType":"uint256","name":"postid","type":"uint256"},{"internalType":"address","name":"postOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"postsOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposalRegistry","outputs":[{"internalType":"uint256","name":"proid","type":"uint256"},{"internalType":"address","name":"proOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"uint256","name":"pamt","type":"uint256"},{"internalType":"bool","name":"claim_status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"prosOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_proId","type":"uint256"}],"name":"pvoteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_proId","type":"uint256"}],"name":"pvoteUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalposts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalproposals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
    const contractAddress = "0x7bcc3D0BC6461077121ECD39A558c62d13dAcA53";
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
    const contractAddress = "0x7bcc3D0BC6461077121ECD39A558c62d13dAcA53";
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


  return (
    <div >
      <div className="team">
        {
          proposals.map((proposal) => {
            return(
              <div key={parseInt(proposal[0],16)} className="team_member card">
                  <span style={{backgroundColor:"white", borderRadius:"3px", color:"black", padding:"3px", marginBottom:"10px"}}>proposal ID: {parseInt(proposal[0],16)}</span>
                  {/* <span style={{backgroundColor:"white", borderRadius:"3px", color:"black", padding:"3px", marginBottom:"3px"}}>{proposal[4]}</span> */}
                <div style={{display:"flex", justifyContent:"space-between"}}>
                  <span style={{border:"1px white solid", borderRadius:"3px", color:"white", padding:"3px", marginBottom:"3px" }}>{parseDate(proposal[5]) }</span>
                  <span style={{border:"1px white solid", borderRadius:"3px", color:"white", padding:"3px", marginBottom:"3px" }}>{parseDate(proposal[6]) }</span>
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                  <span style={{border:"1px white solid", borderRadius:"3px", color:"white", padding:"3px", marginBottom:"3px" }}>{parseTime(proposal[5]) }</span>
                  <span style={{border:"1px white solid", borderRadius:"3px", color:"white", padding:"3px", marginBottom:"3px"}}>{parseTime(proposal[6]) }</span>
                </div>
                <span style={{ borderRadius:"3px", color:"white", padding:"3px", marginTop:"9px", border: "1px white solid"}}>{proposal[4]}</span>
                <div style={{display:"flex", justifyContent:"space-between", marginTop:"9px"}}>
                  <a href={proposal[8]} style={{border:"1px white solid", borderRadius:"3px", color:"white", padding:"3px", marginBottom:"3px", textDecoration:"none", width:"45%"}} target="_blank">Blueprint</a>
                  <span style={{border:"1px white solid", borderRadius:"3px", color:"white", padding:"3px", marginBottom:"3px", width:"45%" }}>{ethers.utils.formatEther(proposal[9])} MATIC</span>
                </div>

                {/* Message */}
                <p className="message"> {proposal[7]}</p>
                
                <div style={{ marginTop:"auto"}}>
                  {
                    curr() > proposal[6] ? <button className='voting-btn cursor-disabled' onClick={() => pvoteUp(parseInt(proposal[0],16), proposal[6])}> <FiArrowUp /> ({proposal[2]}) </button> : <button className='voting-btn' onClick={() => pvoteUp(parseInt(proposal[0],16), proposal[6])}> <FiArrowUp /> ({proposal[2]}) </button>
                  }
                  {
                    curr() > proposal[6] ? <button className='voting-btn cursor-disabled'  onClick={() => pvoteDown(parseInt(proposal[0],16), proposal[6])}><FiArrowDown />({proposal[3]})</button> : <button className='voting-btn' onClick={() => pvoteDown(parseInt(proposal[0],16), proposal[6])}><FiArrowDown />({proposal[3]})</button>
                  }
                </div>
              </div>
            )
          })
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

export default AllProposals
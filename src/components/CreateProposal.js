import React, { useEffect, useState } from 'react'
import "../components/styles/CreatePost.css"
import { ethers } from 'ethers'
import { Web3Storage } from 'web3.storage'
import axios from 'axios'
import {HiOutlineUpload} from 'react-icons/hi'
const FormData = require("form-data");
// import dotenv from 'dotenv'

const CreateProposal = () => {
  
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [duration, setDuration] = useState(0);
  const [category, setCategory] = useState("")
  const [message, setMessage] = useState("")
  const [amount, setAmount] = useState(0.0)
  const [ipfsHash , setIpfsHash] = useState("")
  const [file, setFile] = useState();

  const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGIyOTA2NzJGNUJBY2Y2OTBBMkE4NGQ5QzE3NWE4ZUEwRjM0ZWI5ZjYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODEwMzY1NjY5NDgsIm5hbWUiOiJkYW8ifQ.VSphQhxNHE9h1AQB3TMl29Jta1-jSJceGWgL2ur8NsI" })


  useEffect(() => {
    var sec = (hours * 3600) + (minutes * 60)
    setDuration(sec);
  }, [hours, setHours, minutes, setMinutes])


      const sendFileToIPFS = async (e) => {

        if (file) {
            try {

                const formData = new FormData();
                formData.append("file", file);

                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
                        'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
                        "Content-Type": "multipart/form-data"
                    },
                });
                setIpfsHash(`${resFile.data.IpfsHash}`); 
                console.log(`${resFile.data.IpfsHash}`)
//Take a look at your Pinata Pinned section, you will see a new file added to you list.   

            } catch (error) {
                console.log("Error sending File to IPFS: ")
                console.log(error)
            }
        }
    }


  const handleCreateSubmit = (event) => {
    event.preventDefault();
    if(duration !== 0 && category !== "" && message !== null && duration > 24*60*60 && amount > 0){
      createPro()
      // console.log({hours, minutes, duration, categoryId, message})
      alert("Submited")

    }
    else if(duration < 24*60*60){
      alert("Duration must be greater than 24 Hours")
    }
    else if(!amount.match(/[-+][0-9]+\.[0-9]+$/)){
      alert("enter valid amount")
    }
    else{
      alert("Fields cannot be empty")
    }

  }



const createPro = async () => {

    await sendFileToIPFS()
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const abi= [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"_proid","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"},{"internalType":"string","name":"_uri","type":"string"},{"internalType":"uint256","name":"_pamt","type":"uint256"}],"name":"createPro","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"postRegistry","outputs":[{"internalType":"uint256","name":"postid","type":"uint256"},{"internalType":"address","name":"postOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"postsOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposalRegistry","outputs":[{"internalType":"uint256","name":"proid","type":"uint256"},{"internalType":"address","name":"proOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"uint256","name":"pamt","type":"uint256"},{"internalType":"bool","name":"claim_status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"prosOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_proId","type":"uint256"}],"name":"pvoteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_proId","type":"uint256"}],"name":"pvoteUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalposts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalproposals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
    const contractAddress = "0x7bcc3D0BC6461077121ECD39A558c62d13dAcA53";
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const EtherToWei = ethers.utils.parseUnits(amount,"ether") // get the ether value (0.11) in decimal in the input field
    // const hash = "QmNg95LhDNViDb6zdsFptV8MmGx8Wd1Mkr3wt235YR45Cc"; // use the file upload to pinata to generate the ifps has
    const ifpslink = ipfsHash                  //display the ifps link in a greyed out field that cant be edited
    const tx = await contract.createPro(category,duration,message,ifpslink,EtherToWei); 
    const receipt = await tx.wait();
    console.log("link : " + ifpslink )

};

  return (
    <div id='main'>
      <form id='container' style={{marginTop:"2rem"}} onSubmit={handleCreateSubmit}>
          <h2>Create Proposal</h2>
          <input onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Topic'/>
          <input onChange={(e) => setCategory(e.target.value)} type="text" placeholder='Category' />
          <input min='24' onChange={(e) => setHours(e.target.value)} type="number" placeholder='Hours'/>
          <input onChange={(e) => setMinutes(e.target.value)} type="number" placeholder='Minutes'/>
          <input type="number" step="0.001" min="0.001" max='0.004' onChange={(e) => setAmount(e.target.value)} placeholder='Amount'/>
          <input  onChange={(e) => setIpfsHash(e.target.value)} type="text" value={ipfsHash} placeholder='IPFS link' readOnly={true}/>
          <p style={{marginTop:".5rem", marginBottom:".5rem"}}>Upload choose the file, click on upload button and wait until it shows ipfs link in above field </p>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center", border:"1px white solid", borderRadius:"5px"}}>
            <input style={{color:"white", margin:"0px"}} onChange={e => setFile(e.target.files[0])} type='file' placeholder='Blueprint' required />
            <button type='button' style={{backgroundColor:"#5a07e0", padding:"3px", borderRadius:"2px", height:"30px", width:"40px"}} onClick={sendFileToIPFS}><HiOutlineUpload /></button>
          </div>
          <button id='create-btn' type='submit'>POST</button>
      </form>
          {/* <button id='' onClick={sendFileToIPFS}>getHash</button> */}
    </div>
  )
}

export default CreateProposal
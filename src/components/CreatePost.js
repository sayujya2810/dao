import React, { useEffect, useState } from 'react'
import "../components/styles/CreatePost.css"
import { ethers } from 'ethers'
const CreatePost = () => {
  
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [duration, setDuration] = useState(0);
  const [category, setCategory] = useState("")
  const [message, setMessage] = useState("")


  useEffect(() => {
    var sec = (hours * 3600) + (minutes * 60)
    setDuration(sec);
  }, [hours, setHours, minutes, setMinutes])

  const handleCreateSubmit = (event) => {
    event.preventDefault();
    if(duration !== 0 && category !== "" && message !== null ){
      createPost()
      // console.log({hours, minutes, duration, categoryId, message})
      alert("Submited")

    }
    else if(duration === 0){
      alert("Duration must be greater than 0")
    }
    else{
      alert("Fields cannot be empty")
    }

  }



  const createPost = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"postRegistry","outputs":[{"internalType":"uint256","name":"postid","type":"uint256"},{"internalType":"address","name":"postOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"postsOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalposts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteUp","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    const contractAddress = "0x0f8c8acc4113bad06d06fff384791df73767e70b";
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const tx = await contract.createPost(category,duration,message); //edit categoty is string, duration(in seconds)
    const receipt = await tx.wait();
};

  return (
    <div id='main'>
      <form id='container' style={{marginTop:"2rem"}} onSubmit={handleCreateSubmit}>
          <h2>Create Post </h2>
          <input onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Topic'/>
          <input onChange={(e) => setCategory(e.target.value)} type="text" placeholder='Category' />
          <input onChange={(e) => setHours(e.target.value)} type="number" placeholder='Hours'/>
          <input onChange={(e) => setMinutes(e.target.value)} type="number" placeholder='Minutes'/>

          <button id='create-btn' type='submit'>POST</button>
          
      </form>
    </div>
  )
}

export default CreatePost
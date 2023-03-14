import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import "../components/styles/Team.css"
import {FiArrowDown, FiArrowUp} from "react-icons/fi"


const AllPosts = (props) => {

  const address = props.userAddress

  const [postIdHex, setPostIdHex] = useState([])
  const [postId, setPostId] = useState([])
  const [numPosts, setNumPosts] = useState(0)
  const [posts, setPosts] = useState([])

  const totalposts = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"postRegistry","outputs":[{"internalType":"uint256","name":"postid","type":"uint256"},{"internalType":"address","name":"postOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"postsOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalposts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteUp","outputs":[],"stateMutability":"nonpayable","type":"function"}]  
    const contractAddress = "0x0f8c8acc4113bad06d06fff384791df73767e70b";
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const tx = await contract.totalposts();
    return tx;
};

  useEffect( () => {
    const num = totalposts()
    num.then(res => setNumPosts(parseInt(res)))
    // setNumPosts(num)
  },[])

  // useEffect(() => {
  //   var temp = []
  //   postIdHex.forEach(hex => temp.push(parseInt(hex,16)) )
  //   setPostId(temp)
  // }, [postIdHex, setPostIdHex])

  useEffect(() => {


    // postId.forEach(id => {
    //   getPost(id).then((res) => setPosts(posts => [...posts, res]))
    // } )

    for(var id = 1 ; id < numPosts ; id++){
      getPost(id).then((res) => setPosts(posts => [...posts, res]))
    }
    console.log(posts)
  }, [numPosts, setNumPosts])


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

// const curr = Math.floor(Date.now() / 1000)
// alert(parseDate(curr))
// alert(parseTime(curr))






  const getPost = async (_id) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"postRegistry","outputs":[{"internalType":"uint256","name":"postid","type":"uint256"},{"internalType":"address","name":"postOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"postsOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalposts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteUp","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    const contractAddress = "0x0f8c8acc4113bad06d06fff384791df73767e70b";
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const tx = await contract.postRegistry(_id); //edit --> done 
    return tx;
    // console.log("tx: " + tx[0])
};

  const voteDown = async (_id) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"postRegistry","outputs":[{"internalType":"uint256","name":"postid","type":"uint256"},{"internalType":"address","name":"postOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"postsOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalposts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteUp","outputs":[],"stateMutability":"nonpayable","type":"function"}]

    const contractAddress = "0x0f8c8acc4113bad06d06fff384791df73767e70b";
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const tx = await contract.voteDown(_id); //edit 
    const receipt = await tx.wait();
  };

  const voteUp = async (_id) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"string","name":"_category","type":"string"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"_topic","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"postRegistry","outputs":[{"internalType":"uint256","name":"postid","type":"uint256"},{"internalType":"address","name":"postOwner","type":"address"},{"internalType":"int40","name":"uvotes","type":"int40"},{"internalType":"int40","name":"dvotes","type":"int40"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"ctime","type":"uint256"},{"internalType":"uint256","name":"etime","type":"uint256"},{"internalType":"string","name":"topic","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"postsOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalposts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postId","type":"uint256"}],"name":"voteUp","outputs":[],"stateMutability":"nonpayable","type":"function"}]

    const contractAddress = "0x0f8c8acc4113bad06d06fff384791df73767e70b";
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try{
      const tx = await contract.voteUp(_id); //edit --> done 
      const receipt = await tx.wait();
    }
    catch(err){
      alert(err)
    }

  };

  return (
    <div >
      <div className="team">
        {console.log("posts: " + posts)}
        {
          posts.map((post) => {
            return(
              <div key={parseInt(post[0],16)} className="team_member card">
                  <span style={{backgroundColor:"white", borderRadius:"3px", color:"black", padding:"3px", marginBottom:"10px"}}>Post ID: {parseInt(post[0],16)}</span>
                  {/* <span style={{backgroundColor:"white", borderRadius:"3px", color:"black", padding:"3px", marginBottom:"3px"}}>{post[4]}</span> */}
                <div style={{display:"flex", justifyContent:"space-between"}}>
                  <span style={{border:"1px white solid", borderRadius:"3px", color:"white", padding:"3px", marginBottom:"3px" }}>{parseTime(post[5]) }</span>
                  <span style={{border:"1px white solid", borderRadius:"3px", color:"white", padding:"3px", marginBottom:"3px" }}>{parseDate(post[5]) }</span>
                  <span style={{border:"1px white solid", borderRadius:"3px", color:"white", padding:"3px", marginBottom:"3px"}}>{parseTime(post[6]) }</span>
                </div>
                <span style={{ borderRadius:"3px", color:"white", padding:"3px", marginTop:"9px", border: "1px white solid"}}>{post[4]}</span>

                {/* Message */}
                <p className="message"> {post[7]}</p>
                
                <div style={{ marginTop:"auto"}}>
                  <button className='voting-btn' onClick={() => voteUp(parseInt(post[0],16))}> <FiArrowUp /> ({post[2]}) </button>
                  <button className='voting-btn' onClick={() => voteDown(parseInt(post[0],16))}><FiArrowDown />({post[3]})</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllPosts
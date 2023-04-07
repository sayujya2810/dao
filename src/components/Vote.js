import React, { useEffect, useState } from 'react'
import Nav from "../components/Nav"
import AnimatedCursor from "react-animated-cursor"
import Welcome from "../Pages/Welcome"
import CreatePost from './CreatePost'
import AllPosts from './AllPosts'
import MyPosts from './MyPosts'
import Admin from './Admin'
import Proposal from './Proposal'
import AllProposals from './AllProposals'
import MyProposals from './MyProposals'
import CreateProposal from './CreateProposal'
import { ethers } from 'ethers'
import Search from './Search'

const Vote = () => {
    const [walletAddress, setWalletAddress] = useState("Connect")
    const [nav, setNav] = useState("welcome")
    const [isAdmin, setIsAdmin] = useState(false)
    const [authToken, setAuthToken] = useState(2);
    var adminAddress = "0x9769Dd9831a96E49B2c73C3C8431ff349AebD328"


    useEffect(() => {
        if(walletAddress == adminAddress.toLowerCase()){
            setIsAdmin(true)
        }
    },[walletAddress, setWalletAddress])


    useEffect(() => {
        if(walletAddress === "Connect" ){
            setIsAdmin(false)
        }
    },[walletAddress, setWalletAddress])


    // const getbalanceOf = async() => {
    //     const provider = new ethers.providers.Web3Provider(window.ethereum);
    //     const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address[]","name":"_to","type":"address[]"}],"name":"Airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"MetadataUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"Mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]
    //     const contractAddress = "0xb152A8318E63560E87C35220FB45DC87d8E7bb5C";
    //     const contract = new ethers.Contract(contractAddress, abi, provider);
    //     const tx = await contract.balanceOf(walletAddress); // use this to check whether the owner alreadys owns a nft or not
    //     console.log(parseInt(tx))
    //     setAuthToken(parseInt(tx))
    //     // use this on the landing page before allowing them to use posts or proposals
    //     // also use this to check the wallet addresse given in the input field in the mint and airdrop function to make sure no wallet is sent 2 NFTs
    // };


  return (
    <div>
        <AnimatedCursor
            innerSize={8}
            outerSize={10}
            color='255, 255, 255'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}
            />

            
        <Nav admin={isAdmin} settingAuth={setAuthToken} settingNav={setNav} userAddress={walletAddress} setUserAddress={setWalletAddress} />
        {/* Rendreing Voting Sys */}
        { authToken === 0 ? <h1 style={{color:"red", fontSize:"69px"}}>Get Authorized Biyaachh</h1> : 
            <div style={{minHeight:"90vh", backgroundColor:"#5a07e0"}}>
                {nav === "welcome" ? <Welcome /> : null }
                {nav === "allPro" ? <AllProposals /> : null }
                {nav === "myPro" ? <MyProposals userAddress={walletAddress} /> : null }
                {nav === "createPost" ? <CreatePost /> : null }
                {nav === "createPro" ? <CreateProposal /> : null }
                {nav === "allPosts" ? <AllPosts /> : null }
                {nav === "myPosts" ? <MyPosts userAddress={walletAddress} /> : null }
                {nav === "admin" ? <Admin /> : null }
                {nav === "search" ? <Search /> : null }
            </div>}
    </div>
  )
}

export default Vote
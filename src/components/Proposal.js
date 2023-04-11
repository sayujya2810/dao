import React, { useEffect, useState } from 'react'
import Nav from "../components/Nav"
import AnimatedCursor from "react-animated-cursor"
import Welcome from "../Pages/Welcome"
import CreatePost from './CreatePost'
import AllPosts from './AllPosts'
import MyPosts from './MyPosts'
import Admin from './Admin'
import AllProposals from './AllProposals'
import MyProposals from './MyProposals'
import CreateProposal from './CreateProposal'
import { ethers } from 'ethers'
import Search from './Search'
import SearchProposals from './SearchProposals'
import { redirect, useNavigate, useNavigation } from 'react-router-dom'

const Proposal = (props) => {
    // const [walletAddress, setWalletAddress] = useState("Connect")
    const walletAddress = props.userAddress
    const setWalletAddress = props.setWalletAddress

    const authToken = props.auth
    const setAuthToken = props.setAuth

    const [nav, setNav] = useState("welcome")
    const [isAdmin, setIsAdmin] = useState(false)
    var adminAddress = "0x9769Dd9831a96E49B2c73C3C8431ff349AebD328"
    const navigate = useNavigate()

    useEffect(() => {
        if(walletAddress == adminAddress.toLowerCase()){
            setIsAdmin(true)
        }
    },[walletAddress, setWalletAddress])


    useEffect(() => {
        if(authToken < 1){
            alert("unauth" + authToken)
        }
    },[authToken,setAuthToken])


    useEffect(() => {
        if(walletAddress === "Connect" ){
            setIsAdmin(false)
        }
    },[walletAddress, setWalletAddress])


    if(window.ethereum){
      window.ethereum.on('accountsChanged', () => {
        navigate("/")
        //  alert(auth)
      });
      // window.ethereum._metamask.isUnlocked().then(res => console.log(res))
    }


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
            
            
        <Nav admin={isAdmin} nav={"proposal"} settingAuth={setAuthToken} authState={authToken} settingNav={setNav} userAddress={walletAddress} setUserAddress={setWalletAddress} />
        {/* Rendreing Voting Sys */}
        
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
                {nav === "searchPro" ? <SearchProposals /> : null }
            </div>
    </div>
  )
}

export default Proposal
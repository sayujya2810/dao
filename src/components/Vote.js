import React, { useEffect, useState } from 'react'
import Nav from "../components/Nav"
import AnimatedCursor from "react-animated-cursor"
import Welcome from "../Pages/Welcome"
import CreatePost from './CreatePost'
import AllPosts from './AllPosts'
import MyPosts from './MyPosts'
import Admin from './Admin'

const Vote = () => {
    const [walletAddress, setWalletAddress] = useState("Connect")
    const [nav, setNav] = useState("welcome")
    const [isAdmin, setIsAdmin] = useState(false)
    var adminAddress = "0x5C6161C09c29876596BE53dC5546f7ec5298d896"


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
        <Nav admin={isAdmin} settingNav={setNav} userAddress={walletAddress} setUserAddress={setWalletAddress} />

        {/* Rendreing Voting Sys */}
        <div style={{height:"90vh", overflow:"hidden", backgroundColor:"#5a07e0"}}>
            {nav === "welcome" ? <Welcome /> : null }
            {nav === "createPost" ? <CreatePost /> : null }
            {nav === "allPosts" ? <AllPosts /> : null }
            {nav === "myPosts" ? <MyPosts /> : null }
            {nav === "admin" ? <Admin /> : null }
        </div>
    </div>
  )
}

export default Vote
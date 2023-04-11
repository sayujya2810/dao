import React, { useState } from 'react'
import Faq from './Faq'
import Footer from './Footer'
import Intro from './Intro'
// import Main from './Main'
// import Navbar from './Navbar'
import Team from './Team'
import Timeline from './Timeline'
import "./styles/Home.css"
import About from './About'
// import Mint from './Mint'
import Cursor from './Cursor'
import ModalComp from './ModalComp'
import Navbar from './Navbar'
import AnimatedCursor from "react-animated-cursor"
import ImpLinks from './ImpLinks'
import { useEffect } from 'react'
// import Navbar from './components/navbar/'
// import WalletCard from './WalletCard'


const Home = (props) => {

  const [flag, setFlag] = useState(false)
  // const [userAddress, setUserAddress] = useState("Connect")

  const userAddress = props.userAddress
  const setUserAddress = props.setUserAddress
  // const {auth, setAuth} = props
  const auth = props.auth
  const setAuth = props.setAuth
  return (
    <>
        {/* <Navbar /> */}
        <Navbar child1={setFlag} userAddress={setUserAddress} settingAddress={userAddress} auth={auth} setAuth={setAuth} />
        <div className='home'>
          {/* <WalletCard /> */}
          {/* <Mint /> */}
            {/* <Main child2={flag} userAddress_ = {userAddress} /> */}
            <Intro />
            <About />
            <Timeline />
            <ImpLinks />
            <Faq />
            <Team />
            <Footer />
            {/* <Cursor /> */}

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
            {/* <ModalComp /> */}
        </div>
    
    </>
  )
}

export default Home
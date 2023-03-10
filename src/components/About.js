import React, { useEffect } from 'react'
import "./styles/About.css"
import AOS from 'aos';
import "aos/dist/aos.css"

const About = () => {

    useEffect(() => {
  AOS.init({
    duration : 800
  });
}, []);


  return (
    <>
        <div id='about'>
            {/* <img data-aos="flip-left" id='doc' alt='DOC' src='./images/doc.jpg' /> */}
            <div className='inner-container'>
                <h1 data-aos="zoom-in">About</h1>
                <p data-aos="zoom-in">DAOs are created to organize funds, projects and communities. In a DAO model, there is no accountability for the real identities of the contributors. Blockchain technology maintains integrity in keeping the DAO community and its operations organized, transparent and verified. No one can do anything within DAO without getting noticed.</p>
                <p data-aos="zoom-in"> DAOs can cut out much of the costs and bureaucracy of traditional organizations. They are gaining popularity among business organizations that seek for more flexible decision-making structure anchored in blockchain powered decentralization and tokenization of governance.</p>
                <p data-aos="zoom-in">Our vision is to welcome more blockchain anonymity into corporate space by offering meaningful IP and an extraordinary community to create real value.</p>
                <p data-aos="zoom-in">Technology, happiness and confidence. DAO stands at the side of the world.</p>
            </div>
        </div>
    </>
  )
}

export default About
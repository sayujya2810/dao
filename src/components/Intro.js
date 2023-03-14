import React from 'react'
import "./styles/Intro.css"
  import { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css"
import Slider from './Carousel/Slider';
// import { SliderData } from './SliderData';
// import Slider from "../../public/carousel1/Slider"
// import CarouselNft from './CarouselNft';

     

const Intro = () => {
  
   useEffect(() => {
  AOS.init({
    duration : 1000
  });
}, []);

  return (
    <section id='intro-section'>
        {/* <div className='triangle2' /> */}
        <div id='intro'>
                {/* <img data-aos="zoom-in-left" id='nft-img' src='./images/nft-img.png' alt='nft img'></img> */}
                {/* <CarouselNft /> */}
                {/* <Slider /> */}
                <img id='logoMain' src='./images/log3.png' alt='company logo' />
                <h1 data-aos="zoom-in-right" id='intro-heading'>Decetralised Autonomous Organisation</h1>
                <p data-aos="zoom-in-right" id='intro-p'>Organisation which embraces Corporate Employee Empowerment.</p>
        </div>
    </section>
  )
}

export default Intro
import React, {useEffect, useState} from 'react'
import './Slider.css'
import {Carousel} from "react-bootstrap"
// import dataSlider from '../dataSlider'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AOS from 'aos';
export default function Slider() {

    useEffect(() => {
  AOS.init({
    duration : 1000
  });
}, []);


    return (
        <Carousel data-aos="zoom-in-left" indicators={false} controls={false} fade>
  <Carousel.Item interval={2000}>
    <img 
      style={{width:"250px", height:"250px", borderRadius:"50%"}}
        src="./DOC_Img/Img1.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img 
      style={{width:"250px", height:"250px", borderRadius:"50%"}}
      src="./DOC_Img/Img2.png"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img 
      style={{width:"250px", height:"250px", borderRadius:"50%"}}
      src="./DOC_Img/Img3.png"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img 
      style={{width:"250px", height:"250px", borderRadius:"50%"}}
        src="./DOC_Img/Img23.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img 
      style={{width:"250px", height:"250px", borderRadius:"50%"}}
      src="./DOC_Img/Img24.png"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img 
      style={{width:"250px", height:"250px", borderRadius:"50%"}}
      src="./DOC_Img/Img13.png"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    )}

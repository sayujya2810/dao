import React from 'react'
import "./styles/CarouselNFT.css"

const CarouselNft = () => {


    const slider = document.querySelector(".slider")
    const prev = document.querySelector(".prev")
    const next = document.querySelector(".next")

    // next.addEventListener('click', () => {
    //     console.log("hello")
    // })

    var sectionIndex = 0;

    // const reset = () => {
    //     for(var i=0; i< slider.children.length; i++){
    //         slider.children[i].style.zIndex = 0;
    //         slider.children[i].style.opacity = 0;
    //     }
    // }


    const nextSlide = () => {
        // reset()
        sectionIndex += 1
        slider.children[sectionIndex].style.zIndex = 3;
        slider.children[sectionIndex].style.opacity = 3;
    }
    const prevSlide = () => {
        // reset()
        sectionIndex -= 1
        slider.children[sectionIndex].style.zIndex = 3;
        slider.children[sectionIndex].style.opacity = 3;
    }




    

  return (
    


    <div className='carousel-container'>
        <div className='carousel'>
            <div className='slider'>
                <section>content 1</section>
                <section>content 2</section>
                <section>content 3</section>
            </div>
            <div className='controls'>
                <button className='next' onClick={nextSlide} ><i className='material-icons'>keyboard_arrow_right</i></button>
                <button className='prev' onClick={prevSlide}><i className='material-icons'>keyboard_arrow_left</i></button>
            </div>
        </div>
    </div>
  )

    




}

export default CarouselNft
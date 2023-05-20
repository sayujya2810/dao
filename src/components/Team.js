import React, { useEffect } from 'react'
import "./styles/Team.css"
import AOS from 'aos';
import "aos/dist/aos.css"


const Team = () => {
    useEffect(() => {
  AOS.init({
    duration : 1000
  });
}, []);


function flip(event){
	var element = event.currentTarget;
	if (element.className === "card") {
    if(element.style.transform === "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }

  // alert("hi")
};

  return (

    

    // <div id='team'>
    //     <h1>Our Team</h1>
    //     <div className='rows'>
    //         <div className='inner-row' >
    //             <div className='cards'  data-aos={"fade-left"} >
    //                 <img alt='user' src='./images/nft-img.png' style={{borderRadius:"50%"}} />
    //                 <h2>Aman Khattak</h2>
    //                 <p>Rachel is a cyber security engineer, futurist and ​digital entrepreneur. She has built a network of over 500 million followers on social media.</p>
    //             </div>
    //             <div className='cards' data-aos={"fade-left"} >
    //                 <img alt='user' src='./images/profile/diego.jpg' style={{borderRadius:"50%"}} />
    //                 <h2>Diego Vargas</h2>
    //                 <p>Founder of Goat Marketing and meme networks on Instagram, Diego has worked with major brands like Netflix, Tinder, Burger King, FitTea, and more.</p>
    //             </div>
    //         </div>
    //         <div className='inner-row'>
    //             <div className='cards' data-aos={"fade-left"} >
    //                 <img alt='user' src='./images/nft-img.png' style={{borderRadius:"50%"}} />
    //                 <h2>Brian Bennett</h2>
    //                 <p>With over two decades of experience in the IaaS field, Brian brings a wealth of technical knowledge and expertise to the team.</p>
    //             </div>
    //             <div className='cards' data-aos={"fade-left"} >
    //                 <img alt='user' src='./images/profile/victor.jpg' style={{borderRadius:"50%"}} />
    //                 <h2>Victor Nunez</h2>
    //                 <p>As an early adopter to Discord, Manuel is utilizing his​management skill to help NFT projects build their </p>
    //             </div>
    //         </div>
            
    //     </div>

        
    // </div>



    <div id='team' className="wrapper">
      <h1>Our Team</h1>
      <div className="team">
        <div data-aos={"fade-up"} className="team_member card" onClick={flip}>
          <div className="team_img">
            <img src="./images/profile/veera.jpg" alt="Team_image" style={{borderRadius:"50%"}}  />
          </div>
          <h3>VEERA VP</h3>
          <p className="role">Blockchain Developer</p>
          <p>Currently the Lead Blockchain Dev at GetBoarded Inc.</p>
        </div>
        <div data-aos={"fade-up"} className="team_member card" onClick={flip}>
          <div className="team_img">
            <img src="./images/profile/sayujya.jpg" alt="Team_image" style={{borderRadius:"50%"}}  />
          </div>
          <h3>Sayujya Malkan</h3>
          <p className="role">Full Stack Developer</p>
          <p>Worked as Core dev at Funky Bunnies 3D, was responsible to handle the production code, which sold off over 400 NFTs.</p>
        </div>
        <div  data-aos={"fade-up"} className="team_member card" onClick={flip}>
          <div className="team_img">
            <img src="./images/profile/aman.jpg" style={{borderRadius:"50%"}} alt="Team_image" />
          </div>
          <h3>Aman Yadav</h3>
          <p className="role">Integration Engineer</p>
          <p>Aman is a cyber security engineer, futurist and ​digital entrepreneur.</p>
        </div>
        
      </div>
      
    </div>
  )
}

export default Team
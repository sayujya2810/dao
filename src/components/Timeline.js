import React, { useEffect } from 'react'
import "./styles/Timeline.css"
import AOS from 'aos';
import "aos/dist/aos.css"

    

const Timeline = () => {

  function flip(event){
	// var element = event.currentTarget;
	// if (element.className === "card") {
  //   if(element.style.transform === "rotateY(180deg)") {
  //     element.style.transform = "rotateY(0deg)";
  //   }
  //   else {
  //     element.style.transform = "rotateY(180deg)";
  //   }
  // }

  alert("hi")
};

    useEffect(() => {
  AOS.init({
    duration : 1000
  });
}, []);

  return (
    <div className="containers" id='timeline'>
          <h1>Roadmap</h1>
        <div className="timelines" data-aos="zoom-in" >
            <ul>
            <li className='timeline-box' >
                <div className="timeline-content"  >
                  <h1>25% Completion</h1>
                  <p>Setting a goal and scope of project, making a team, marking feasible technologies.</p>
                </div>
            </li>
            <li className='timeline-box'>
                <div className="timeline-content" >
                  <h1>50% Completion</h1>
                  <p>Literature Survey, Modeling, System Architecture, Methodology and Implementation </p>
                </div>
            </li>
            <li className='timeline-box'>
                <div className="timeline-content" >
                  <h1>75% Completion (TBD) </h1>
                  <p>Completing the code, deploying the contract, fixing bugs, building community.</p>
                </div>
            </li>
            <li className='timeline-box'>
                <div className="timeline-content" >
                  <h1>100% Completion (TBD)</h1>
                  <p>Testing, pushing changes to production, Available to users. </p>
                </div>
            </li>
        </ul>
    </div>
</div>
  )
}

export default Timeline;
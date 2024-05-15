import aboutImage from '/images/aboutusImg.png';
import { Link } from "react-router-dom"


export const AboutUs=()=> {
  return (
    <div className="about" id="about">
        <div className="aboutImg">
          <img src={aboutImage} alt=""  className='img'/>
        </div>
        <div className="aboutText">
          <p className="title1">Radically new solutions for Electromechanical projet</p>
          <p className="description1">Discover revolutionary solutions for your electromechanical projects! MET offers innovative approaches to turn your ideas into reality, using cutting-edge software like AUTOCAD, SOLIDWORKS and MPLAB. Elevate your projects with quality expertise in tutoring, certification, analysis and design.</p>
          <button className='aboutButton'>
              <Link to='/details'>Learn more</Link>
          </button>
        </div>
    </div>
  )
}

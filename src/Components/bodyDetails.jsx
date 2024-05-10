import { useEffect, useState } from 'react'
import { Link } from "react-scroll"
import project01 from '../../public/images/projectpage1.png'
import project02 from '../../public/images/projectpage2.png'


export const BodyDetails=()=> {
    const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
      // Listen for scroll events and update the active section
      const handleScroll = () => {
          const sections = ['abtUs','project01','project02','project03','footer'];
          const scrollPosition = window.scrollY + window.innerHeight / 2;

          for (const section of sections) {
              const element = document.getElementById(section);
              if (element && element.offsetTop <= scrollPosition) {
                  setActiveSection(section);
              }
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  return (
    <div className="bodyDetails" id="bodyDetails">
        <div className="navbar01">   
            <nav className="navigation01">
                <div>
                    <Link
                        to="abtUs"
                        smooth={true}
                        duration={100}
                        className={`aa  ${activeSection === 'abtUs' ? 'active' : ''}`}
                    >
                        What is MET
                    </Link>
                </div>
                
                <div>
                        <Link
                            to="project01"
                            smooth={true}
                            duration={100}
                            className={`aa  ${activeSection === 'project01' ? 'active' : ''}`}
                        >
                            project 01st
                        </Link>
                </div>
               
                <div>
                        <Link
                            to="project02"
                            smooth={true}
                            duration={100}
                            className={`aa  ${activeSection === 'project02' ? 'active' : ''}`}
                        >
                        project 02nd
                        </Link>
                </div>
                
                    <div>
                            <Link
                            to="project03"
                            smooth={true}
                            duration={100}
                            className={`aa ${activeSection === 'project03' ? 'active' : ''}`}
                        >
                        project 03rd
                        </Link>
                    </div>  
            </nav>
            </div>
            <div className='projectBody'>
                    <div id="abtUs">
                        <div className='containerDetails'>
                            <p className='h1Detail'>What is MET?</p>
                            <p className='detailText'>MET, or Méganique and Electro Technologies, is a company specializing in the field of electromechanical engineering. It offers a range of services aimed at supporting professionals and companies in their electromechanical projects, including tutoring, certification, project analysis and project design. Using advanced software like AUTOCAD, SOLIDWORKS, MPLAB, PROTEUS, AUTOMATION STUDIO, TIA PORTAL and EXCEL, MET offers innovative solutions and quality training to help clients achieve their professional goals and excel in their fields.</p>
                        </div>
                    </div>
                    <div id="project01">
                        <div className="containerDetails_P">
                           <p className='h1Detail'>Optimization of Electromechanical Skills with Specialized Tutoring</p>
                            <img src={project01} alt="" />
                            <p className='descImg'>MET offers a tutoring service designed to maximize the learning and skill development of its students. During these tutoring sessions, MET encourages active interaction between learners and trainers, which helps maximize student productivity and strengthen their skills in each session.
   MET s tutoring services cover several essential software and tools in the field of electromechanics, including:</p>
                            <ul>
                                <li><span style={{fontWeight:"bolder",color:"#000"}}>AUTOCAD:</span> A computer-aided design tool widely used in engineering and architecture, providing learners with the opportunity to master the creation of high-quality technical plans and diagrams.</li>
                                <li><span style={{fontWeight:"bolder",color:"#000"}}>SOLIDWORKS:</span> A popular 3D design software that helps students design, model and simulate mechanical and electromechanical projects, preparing them for complex and innovative projects.</li>
                            </ul>
                        <p className='detailText'>These tutorials are tailored to the needs of students and provide them with the knowledge and skills necessary to succeed in the field of electromechanical engineering. MET is committed to supporting its learners throughout their training to guarantee their success.</p>

                        </div>

                    </div>
                    <div id="project02">
                        <div className="containerDetails_P">
                        <p className='h1Detail'>Creation of prototypes with Mount River</p>
                        <img src={project02} alt="" />
                        <p className='descImg'>Creating prototypes with Mount River provides a flexible and accessible approach to designing and testing electronics projects. With its development board and simple programming language, users can easily interact with various components and sensors. Mount River makes it easy to explore new ideas and create effective prototypes, whether<br/><br/> for personal or professional projects. This platform makes it possible to create functional prototypes quickly and efficiently, paving the way for innovation in the field of electronics.</p>
                        </div>
                    </div>
                    <div id="project03">
                        <div className="containerDetails_P">
                           <p className='h1Detail'>Student Support</p>
                            <p className='descImg'>
                            The “Student Support” project offers personalized tutoring sessions to strengthen students’ skills and facilitate their understanding of electromechanical concepts. Students receive guidance on software like AUTOCAD and SOLIDWORKS, improving their preparation for their studies and future careers.
                            </p>
                        </div>
                    </div>

            </div>
    </div>
  )
}

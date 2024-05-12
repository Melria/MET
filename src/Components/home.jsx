import { useEffect, useState,useRef } from 'react'
import{ FaBars, FaTimes } from 'react-icons/fa'

import { Link } from "react-scroll"
import { Screen } from './screen'
import { ProjectPlatform } from './projectplatform'
import { Services } from './services'
 import { AboutUs } from './aboutUs'
import{ Stat } from './stat'
import{ Testimonials } from './testimonials'
import { Projects } from './ourProjects'
import { Contact } from './contactUs'
import { Footer } from './footer'


export const Home=()=> {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    const handleLinkClick = () => {
        navRef.current.classList.remove("responsive_nav");
    }
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
      // Listen for scroll events and update the active section
      const handleScroll = () => {
          const sections = ['header', 'about','services','projects','contact','foot'];
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
    <div>
       
    <div className="navbar">
         <p  style={{color:'#FDAD15', fontSize: '28px',fontWeight: 'bold',fontFamily:"Manrope"}}>MET</p>    
        <nav className="navigation" ref={navRef}>
            <Link
                to="header"
                smooth={true}
                duration={100}
                onClick={handleLinkClick}
                className={`a  ${activeSection === 'header' ? 'active' : ''}`}
            >
                Home
            </Link>
            <Link
                to="about"
                smooth={true}
                duration={100}
                onClick={handleLinkClick}
                className={`a  ${activeSection === 'about' ? 'active' : ''}`}
            >
                About
            </Link>

            <Link
                to="services"
                smooth={true}
                duration={100}
                onClick={handleLinkClick}
                className={`a ${activeSection === 'services' ? 'active' : ''}`}
            >
                Services
            </Link>

            <Link
                to="projects"
                smooth={true}
                duration={100}
                onClick={handleLinkClick}
                className={`a ${activeSection === 'projects' ? 'active' : ''}`}
            >
                Projects
            </Link>

            <Link
                to="contact"
                smooth={true}
                duration={100}
                onClick={handleLinkClick}
                className={`a ${activeSection === 'contact' ? 'active' : ''}`}
            >
                Contacts
            </Link>
            <button  className='nav-btn nav-close-btn' onClick={handleLinkClick}> 
              <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}> 
              <FaBars/>
            </button>
        </div>
        <Screen/>
        <ProjectPlatform />
        <AboutUs />
        <Stat />
        <Services/>
        <Testimonials />
        <Projects />
        <Contact />
        <Footer/>  
</div>
  )
}

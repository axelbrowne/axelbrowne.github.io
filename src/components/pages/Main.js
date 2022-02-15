import React, { useRef, useEffect } from 'react'
import './Main.css'
import About from '../../components/pages/About'
import Footer from '../../components/Footer'
import Projects from '../../components/pages/Projects'
import { Link } from 'react-router-dom'
import '../Navbar.css'
import Logo from '../Logo'
import resume from '../../docs/resume.pdf'

function Main() {
    const aboutSection = useRef(null);
    const gotoAbout = () => window.scrollTo({
        top: aboutSection.current.offsetTop,
        behavior: "smooth"
    });
    const projectsSection = useRef(null);
    const gotoProjects = () => window.scrollTo({
        top: projectsSection.current.offsetTop,
        behavior: "smooth"
    })
    return (
      <div className="main">
        <div className="left">
          <nav className='navbar'>
            <div className='navbar-container'>
              <div className='logo-container'>
                <a onClick={gotoAbout}>
                  <Logo />
                </a>
              </div>
              <div className='nav-menu'>
                <div className='nav-item'>
                  <a onClick={gotoAbout} className='nav-link'>
                    about
                  </a>
                </div>
                <div className='nav-item'>
                  <a onClick={gotoProjects} className='nav-link'>
                    projects
                  </a>
                </div>
                <div className='nav-item'>
                  <a href={resume} target="_blank" className='nav-link' rel="noreferrer">
                    résumé
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="right">
          <div ref={aboutSection}/>
          <About/>
          {/* <Footer /> */}
          <div ref={projectsSection} />
          <Projects/>
        </div>
      </div>
    )
}

export default Main;

import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Sling as Hamburger } from 'hamburger-react'
import './Navbar.css'
import resume from '../docs/resume.pdf'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='logo-container'>
            <div className='logo-circle'>
              <Link to="/" className='logo'>
                Ax
              </Link>
            </div>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <Hamburger toggled={click} toggle={setClick} color='#fff'/>
          </div>
          <div className='nav-menu'>
            <div className='nav-item'>
              <Link to='/about' className='nav-link' onClick={closeMobileMenu}>
                about
              </Link>
            </div>
            <div className='nav-item'>
              <Link to='/projects' className='nav-link' onClick={closeMobileMenu}>
                projects
              </Link>
            </div>
            <div className='nav-item'>
              <a href={resume} target="_blank" className='nav-link' rel="noreferrer" onClick={closeMobileMenu}>
              résumé
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* <div>
        <div className='logo-container'>
          <Link to="/" className='logo'>
            Ax
          </Link>
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <Hamburger toggled={click} toggle={setClick} color='#fff'/>
        </div>
        <ul className={click ? 'mobile-nav-menu active' : 'mobile-nav-menu'}>
          <li className='nav-item'>
              <Link to='/about' className='nav-link' onClick={closeMobileMenu}>
                about
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/projects' className='nav-link' onClick={closeMobileMenu}>
              projects
            </Link>
          </li>
          <li className='nav-item'>
            <a href={resume} target="_blank" className='nav-link' rel="noreferrer" onClick={closeMobileMenu}>
              résumé
            </a>
          </li>
        </ul>
      </div> */}
    </>
  )
}

export default Navbar

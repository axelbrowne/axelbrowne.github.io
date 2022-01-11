import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Sling as Hamburger } from 'hamburger-react'
import './Navbar.css'
import Logo from './Logo'
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
              <Link to="/">
                <Logo/>
              </Link>
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
    </>
  )
}

export default Navbar

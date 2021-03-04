import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import { Sling as Hamburger } from 'hamburger-react'
import './Navbar.css'
import { Button } from './Button'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='logo-container'>
            <Link to="/" className='logo'>
              damián browne
            </Link>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <Hamburger toggled={click} toggle={setClick} color='#fff'/>
          </div>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/Projects' className='nav-link' onClick={closeMobileMenu}>
                projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Services' className='nav-link' onClick={closeMobileMenu}>
                résumé
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Connect' className='nav-link' onClick={closeMobileMenu}>
                connect
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <ul className={click ? 'mobile-nav-menu active' : 'mobile-nav-menu'}>
          <li className='nav-item'>
            <Link to='/Projects' className='nav-link' onClick={closeMobileMenu}>
              projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Resume' className='nav-link' onClick={closeMobileMenu}>
              résumé
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Connect' className='nav-link' onClick={closeMobileMenu}>
              connect
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar

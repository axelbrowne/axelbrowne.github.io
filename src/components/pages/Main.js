import React from 'react'
import './Main.css'
import Navbar from '../../components/Navbar'
import About from '../../components/pages/About'
import Footer from '../../components/Footer'
import Projects from '../../components/pages/Projects'

function Main() {
    return (
        <div className="main">
            <div className="left">
                <Navbar/>
            </div>
            <div className="right">
                <About />
                <Footer />
                <Projects />
            </div>
        </div>
    )
}

export default Main;

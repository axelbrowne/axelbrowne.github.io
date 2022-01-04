import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import FirstPage from '../../components/pages/FirstPage'
import Projects from '../../components/pages/Projects'

function Main() {
    return (
        <>
            <Navbar />
            <FirstPage/>
            <Footer/>
            <Projects/>
        </>
    )
}

export default Main;

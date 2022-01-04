import React from 'react'
import '../../App.css'
import './Home.css'
import './About.css'
// import About from './About.js'
import portrait from '../../images/portrait.jpg'
// import Home from './Home.js'
//  877-994-2583


function FirstPage() {
    return (
        <div className="first-page">
            <div className="left-panel">
                <div className="home">
                    <div className="intro-container">
                        <div className="intro-image">
                            <img src={portrait} />
                        </div>
                        <div className="intro-text">
                            <h2>hi, i'm Axel</h2>
                            <h5>CS undergrad @ LMU</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-panel">
                <div className="about">
                    <h1>About me</h1>
                    <p className="abt-body">
                        I am a software developer from Santa Fe, NM. This year, I will be
                        in my fourth year studying computer science at Loyola Marymount University
                        in Los Angeles, CA.
                        <br /><br />
                        At LMU, I have continued to pursue my passion for programming
                        that began with creating agent-based models of ecosystems.
                        My programming interests have grown to include data science and AI.
                        <br /><br />
                        When I'm not writing code, I love to listen to <a className="intext-link" href="https://open.spotify.com/user/1279758953?si=2he-hlfXROK33CZ-xjgbDA" target="_blank" rel="noreferrer">
                            music
                        </a> and audiobooks, play basketball, eat almond butter, and enjoy the outdoors.
                        <br /><br />
                        Thanks for stopping by! :)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FirstPage;

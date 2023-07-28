import React from 'react';
import '../../App.css';
import './About.css';
import Home from './Home.js';

function About() {
  return (
    <>
      <div className="left-panel">
        <Home />
      </div>
      <div className="right-panel">
        <div className="about">
          <h1>About me</h1>
          <p className="abt-body">
            I am a computer scientist from Santa Fe. I now live in New York
            City.
            <br />
            <br />
            My interest for programming began at age 10, when my grandpa and I
            would exchange code for our Pac-Man-inspired game via email. My
            passion for agent-based modeling of social/eco-systems started
            during the middle school science fair and eventually propelled me to
            write{' '}
            <a
              className="intext-link"
              href="https://www.ifaamas.org/Proceedings/aamas2022/pdfs/p199.pdf"
              target="_blank"
              rel="noreferrer"
            >
              my first paper
            </a>{' '}
            with my favorite LMU professor Dr. Andrew Forney... which in turn
            lead to me returning to my home-state of New Mexico after graduation
            to do computational epidemiology at Los Alamos National Labs for the
            past year.
            <br />
            <br />
            When I'm not writing code, I love to listen to{' '}
            <a
              className="intext-link"
              href="https://open.spotify.com/user/1279758953?si=2he-hlfXROK33CZ-xjgbDA"
              target="_blank"
              rel="noreferrer"
            >
              music
            </a>{' '}
            and audiobooks, play basketball, ski, travel, and enjoy the
            outdoors.
            <br />
            <br />
            Thanks for stopping by! :)
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

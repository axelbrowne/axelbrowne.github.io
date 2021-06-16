import React from 'react'
import '../../App.css'
import './Projects.css'
import Home from './Home.js'
import { FaGithub } from 'react-icons/fa';


function Projects() {
  return (
    <>
      <div className="left-panel">
        <Home/>
      </div>
      <div className="right-panel">
        <div className="projects">
          <a href="https://github.com/damianbrowne/ladder-of-transportability" target="_blank" rel="noreferrer" className="proj-card">
            <h3 className="proj-title">Causal RL Agent Communication, Transportability Across Heterogenous Environments</h3>
            <p className="proj-desc">
              A program that models the effectiveness of different communication (and data 
              adjustment/filtering) policies between agents from heterogenous environments. 
              The simulation encoporates novel techniques in data transportability from causal inference.
            </p>
            <h6 className="proj-lang">Python</h6>
            <h6 className="proj-lib">CausalGraphicalModels</h6>
            <h6 className="proj-lib">Matplotlib</h6>
            <h6 className="proj-lib">NetworkX</h6>
            <h6 className="proj-lib">multiprocessing</h6>
            {/* <FaGithub className="gh" /> */}
          </a>
          <a href="https://damianbrowne.github.io/Speare-Website/#/" target="_blank" rel="noreferrer" className="proj-card">
            <h3 className="proj-title">Speare</h3>
            <p className="proj-desc">
              A programming language and compiler inspired by Shakespearean English.
            </p>
            <h6 className="proj-lang">JavaScript</h6>
            <h6 className="proj-lib">Ohm</h6>
            <a href="https://github.com/MichaelReza/Speare" target="_blank" rel="noreferrer">
              <FaGithub className="gh" />
            </a>
          </a>
          <a href="https://github.com/damianbrowne/portfolio-website" target="_blank" rel="noreferrer" className="proj-card">
            <h3 className="proj-title">This website</h3>
            <p className="proj-desc">
              A personal portfolio website built in React.
            </p>
            <h6 className="proj-lang">JavaScript</h6>
            <h6 className="proj-lang">HTML</h6>
            <h6 className="proj-lang">CSS</h6>
            <h6 className="proj-lib">React</h6>
            <FaGithub className="gh" />
          </a>
          <a href="https://github.com/damianbrowne/FASim-NFAConverter" target="_blank" rel="noreferrer" className="proj-card">
            <h3 className="proj-title">Finite Automata Sim and NFA -> DFA Converter</h3>
            <p className="proj-desc">
              Implements fundamentals of theory of computation to simulate the construction and
              querying of finite automata as well as the conversion of nondeterministic finite
              automata (NFAs) to deterministic finite automata (DFAs).
            </p>
            <h6 className="proj-lang">Java</h6>
            <FaGithub className="gh" />
          </a>
          <a href="https://github.com/damianbrowne/pucksim" target="_blank" rel="noreferrer" className="proj-card">
            <h3 className="proj-title">PuckSim</h3>
            <p className="proj-desc">
              Model of the multi-generational genetic evolution of tadpole-resembling "puck" agents.
              Agents seek food, mate to produce offspring with inherited abilities 
              and behaviors (with chance of mutation), and nurse offspring to adulthood.
            </p>
            <h6 className="proj-lang">Java</h6>
            <h6 className="proj-lib">Abstract Window Toolkit</h6>
            <FaGithub className="gh"/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Projects;

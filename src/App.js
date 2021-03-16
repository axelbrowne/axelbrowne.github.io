import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Projects from './components/pages/Projects'
import About from './components/pages/About'

function App() {
  return (
  <Router basename='/'>
    <div className="page-container">
      <div className="content-wrap">
        <Navbar/>
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/about' exact component={About} />
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;

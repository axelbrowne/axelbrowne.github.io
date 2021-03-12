import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import Footer from  './components/Footer'
import Resume from './components/pages/Resume'

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/resume' exact component={Resume} />
          </Switch>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

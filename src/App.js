import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Footer from  './components/Footer'

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

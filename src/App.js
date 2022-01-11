import React, {Component} from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Main from './components/pages/Main'
import Navbar from './components/Navbar'
import Projects from './components/pages/Projects'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Progress from './components/Progress'
const progressStyle = {
  left: "10%",
}

export default class App extends Component {
  state = {
    scrollPostion: 0
  }

  listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        this.calculateScrollDistance();
      });
    });
  }

  calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = this.getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)

    this.setState({
      scrollPostion,
    });
  }

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  componentDidMount() {
    this.listenToScrollEvent();
  }

  render() {
    return (
      <Router basename='/'>
        <div className="page-container">
          <div className="content-wrap">
            <Progress className="progress" scroll={this.state.scrollPostion + '%'} />
            <Main scroll={this.state.scrollPostion + '%' }/>
          </div>
        </div>
      </Router>
    );
  }
}

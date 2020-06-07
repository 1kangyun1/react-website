import React, { Component } from 'react';
import './App.css';
import {  BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Container from 'react-bootstrap/container';

import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Invalid from './pages/Invalid.js';
import PastProject from './data/PastProject.json';

class App extends Component{

  render() {
    return(
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" render={props => (
                <Projects projs={PastProject} />
              )} />
              <Route component={Invalid} />
            </Switch>
          </Container>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;

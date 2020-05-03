import React, { Component } from 'react';
import './App.css';
import {  BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Container from 'react-bootstrap/container';

import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Invalid from './pages/Invalid.js';

class App extends Component{
  state = {
    projs: [
      {
        "id": 1,
        "name": "Todo App",
        "description": "Todo application using react and api"
      },
      {
        "id": 2,
        "name": "Todo App2",
        "description": "Todo application using react and api"
      },
      {
        "id": 3,
        "name": "Todo App3",
        "description": "Todo application using react and api"
      }
    ]
  }

  render() {
    return(
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" render={props => (
                <Projects projs={this.state.projs} />
              )} />
              <Route exact path="/resume" component={Resume} />
              <Route component={Invalid} />
            </Switch>
          </Container>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;

import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Container from 'react-bootstrap/container';

import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Invalid from './pages/Invalid.js';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route component={Invalid} />
          </Switch>
        </Container>
      </Router>
    </React.Fragment>
  );
}

export default App;

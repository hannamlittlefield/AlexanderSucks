import React from 'react';
import Projects from './Projects'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Navbar(){
    return (
      <Router>
        <div>
              <ul id="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/">Contact</Link></li>
              </ul>

              <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projets/>
          </Route>
        </Switch>
            </div>
      </Router>

      );
    };
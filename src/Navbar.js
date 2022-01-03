import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import About from "./AboutMe";

export default function Navbar(){
    return (
      <Router>
        <div>
              <ul id="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/">Contact</Link></li>
              </ul>
          </div>
          <Routes>
          <Route path='/' element={About}/>
          </Routes>
        </Router>

      );
    };
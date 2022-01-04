import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export default function NavTopbar(){
    return (
      <div style={{ display: 'block', width: 700, padding: 30 }}>
      <Navbar bg="#ede7f6">
        <Link to="/home">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Navbar>
    </div>
  );
}
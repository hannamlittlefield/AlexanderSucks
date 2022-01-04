import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';

export default function NavTopbar(){
    return (
      <div style={{ display: 'block', width: 700, padding: 30 }}>
      <Navbar bg="#ede7f6">
        <Navbar.Brand href="#home">
          Home
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
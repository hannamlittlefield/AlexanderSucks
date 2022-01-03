import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';

export default function NavTopbar(){
    return (
      <div style={{ display: 'block', width: 700, padding: 30 }}>
      <Navbar bg="#ede7f6">
        <Navbar.Brand href="#home">
          <img
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
            alt="Sample Brand Logo"
            width="35"
            className="align-top d-inline-block"
            height="35"
          />Test Company
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
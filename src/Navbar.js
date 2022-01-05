import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledNavBar = styled(Navbar)`
  border-radius: 3px;
`;

export default function NavTopbar(){
    return (
      <div style={{ display: 'block', width: 700, padding: 30 }}>
      <StyledNavBar bg="#ede7f6" className='nav' fixed='top'>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </StyledNavBar>
    </div>
  );
}
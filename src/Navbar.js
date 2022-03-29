import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledNavBar = styled(Navbar)`
  border-radius: 3px;
  sticky: top;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-family: 'Lobster', cursive;
  margin-left: 30px;
  sticky: top;
  &:hover {
      color: #9fa8da;
      -webkit-transition: color .5s linear;
      -moz-transition: color .5s linear;
      -ms-transition: color .5s linear;
      -o-transition: color .5s linear;
      transition: color .5s linear;
    }
  &:active {
      color: #9fa8da !important;
    } 
`

export default function NavTopbar(){
    return (
      <div style={{ display: 'block', padding: 30 }}>
      <StyledNavBar bg="#ede7f6" fixed='top' expand='lg'>
        <Container>
          <Navbar.Brand href="#home">Hanna Littlefield</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <StyledLink to="/about">Home</StyledLink>
              <StyledLink to="/projects">Projects</StyledLink>
              <StyledLink to="/contact">Contact</StyledLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavBar>
    </div>
  );
}
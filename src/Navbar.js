import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import bgimage from './img/flowerbg.png'

const StyledNavBar = styled(Navbar)`
  border-radius: 3px;
  background-image: url(./img/flowerbg.png);
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-family: 'Lobster', cursive;
  font-size: 30px;
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
      <StyledNavBar bg="light" fixed='top' expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">Hanna Littlefield</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <StyledLink to="/about">Home</StyledLink>
              <StyledLink to="/projects">Projects</StyledLink>
              <StyledLink to="/contact">Contact</StyledLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavBar>
  );
}
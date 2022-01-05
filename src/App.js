import {Outlet} from 'react-router-dom'
import './App.css';
import NavTopBar from './Navbar';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCont = styled(Container)`
background-color: #e2e2e2;
height: 100vh;
`

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <marquee behavior="slide" direction="down" scrollamount="5">Hanna Littlefield</marquee><br/>
        <p className='subtext'>Software Developer</p>
        </p>
        <NavTopBar/>
      </header>
      <Outlet />
    </div>
  );
}


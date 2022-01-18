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
        Hanna Littlefield<br/>
        <p className='subtext'>Software Developer</p>
        </p>
        <NavTopBar/>
      </header>
      <Outlet />
    </div>
    <div>
    <Footer>Hanna Littlefield</Footer>
    </div>
  );
}


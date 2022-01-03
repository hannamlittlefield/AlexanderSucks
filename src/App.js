import { render } from '@testing-library/react';
import './App.css';
import NavTopBar from './Navbar';
import Projects from './Projects';


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
      <Projects/>
    </div>
  );
}


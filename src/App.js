import './App.css';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <marquee behavior="slide" direction="down" scrollamount="5">Hanna Littlefield</marquee>
        </p>
      </header>
      <Projects/>
    </div>
  );
}

export default App;

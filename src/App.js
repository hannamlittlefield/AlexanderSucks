import {Outlet} from 'react-router-dom'
import './App.css';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

/*const StyledCont = styled(Container)`
background-color: #e2e2e2;
height: 100vh;
`*/

export default function App() {
  return (
    <div className="App">
      <header>
        <p className="header" align="center">Discount Chocolate Day gift for my semi-boyfriend.</p>
      </header>
      <Outlet />
      <Footer/>
    </div>
  );
}


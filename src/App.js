import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact'; 
import Footer from './Components/Footer';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  )
};

export default App;

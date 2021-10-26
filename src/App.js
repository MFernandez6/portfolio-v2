import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import { Route, Link } from 'react-router-dom';  
import Navbar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;

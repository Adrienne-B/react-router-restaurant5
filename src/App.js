import './App.css';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Menu from './pages/Menu';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
                <Navbar /> 
                    <Routes>
                        <Route path="/" exact element={<Home/>}/>
                        <Route path="/menu" exact element={<Menu/>}/>
                        <Route path="/about" exact element={<About/>}/>
                    </Routes>
      </Router>
    </div>
  );
}

export default App;

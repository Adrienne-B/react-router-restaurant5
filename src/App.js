import './App.css';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Menu from './pages/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Pages/Login/login';

function App() {
  return (
    <div className="App">
      <Router>
                <Navbar /> 
                    <Routes>
                        <Route path="/" exact element={<Home/>}/>
                        <Route path="/menu" exact element={<Menu/>}/>
                        <Route path="/about" exact element={<About/>}/>
                        <Route path="/login" exact element={<Login/>}/>
                    </Routes>
      </Router>
    </div>
  );
}


// <!-- -->
// const App = () => {
//         return(
//           <div>
//             <Switch>
//               <Route exact path='/' component={Login}/>
//             </Switch>
//           </div>
//         )
// }     

export default App;

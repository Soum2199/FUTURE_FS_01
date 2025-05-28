// import logo from './logo.svg';
import About from './About';
import './App.css';
import Home from './Home';
import { Routes, Route,BrowserRouter, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

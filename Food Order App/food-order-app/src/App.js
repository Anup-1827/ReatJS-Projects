// import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './Components/Footer'
import Menu from './pages/Menu'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <div className="App">
      <Router> 
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/menu' element = {<Menu/>}/>
        <Route path='/about' element ={ <AboutUs/>}/>
        <Route path='/contact' element ={<ContactUs/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;

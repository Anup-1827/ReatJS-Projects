import React,  {useState} from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'
// import MenuIcon from '@mui/icons-material/Menu';
import ReorderIcon from '@mui/icons-material/Reorder';
export default function Navbar() {

    const [toggle , toggleFunction] = useState(false)

    const toggleNav = ()=>{
        toggleFunction(!toggle);
    }

    return (
        <div className="header">
            <div className="NavBar">
                <div className="LeftSide">
                    <img className="imgWidth" src={logo} alt="logo" />
                </div>
                <div className="RightSide">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                {/* <div className="hamBurger">
                </div> */}
                <button onClick={toggleNav}><ReorderIcon/></button>
            </div>
            <div className="pages" id = {toggle?"show": "close"}>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact</Link>
                
            </div>
        </div>
    )
}

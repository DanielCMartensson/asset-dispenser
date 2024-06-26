import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Styles/Navbar.css"
import logo from "../../assets/logo.png"

const Navbar = () => {

  return (    
  <>
    <nav>
      <div className='logo'>
        <a href="/">
        <img src={logo} alt="logo" width="60px" height="auto" />
        </a>
      </div>
      
      <ul>        
        <li>
          <span className="gradient-text">
          <NavLink to={"/about"}>About</NavLink>
          </span>
        </li>
        <li>
          <span className="gradient-text">
          <NavLink to={"/minting"}>Minting</NavLink>
          </span>
        </li>
        <li>
          <span className="gradient-text">
          <NavLink to={"/legal"}> Legal aspects</NavLink>
          </span>
        </li>
      </ul>

    </nav>
    </>
  )
}

export default Navbar

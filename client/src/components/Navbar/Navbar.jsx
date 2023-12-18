import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (    
  <>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
    <nav>
      <ul>        
        <li>
          <span class="gradient-text">
          <NavLink to={"/"}>Start</NavLink>
          </span>
        </li>
        <li>
          <span class="gradient-text">
          <NavLink to={"/minting"}>Minting</NavLink>
          </span>
        </li>
        <li>
          <span class="gradient-text">
          <NavLink to={"/legal"}> Legal aspects</NavLink>
          </span>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar

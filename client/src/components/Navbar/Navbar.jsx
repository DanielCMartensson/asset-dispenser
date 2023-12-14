import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Start</NavLink>
        </li>
        <li>
          <NavLink to={"/minting"}>Minting</NavLink>
        </li>
        <li>
          <NavLink to={"/legal"}> Legal aspects</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

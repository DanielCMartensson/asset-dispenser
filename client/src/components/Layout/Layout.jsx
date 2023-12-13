import React from 'react'
import Main from '../Main/Main'
import "./Layout.css"
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Layout = () => {
  return (
    <>
      <header className='wrapper'><Navbar/></header>
      <Outlet/>
      <footer className='wrapper'>Footer</footer>
    </>
  )
}

export default Layout

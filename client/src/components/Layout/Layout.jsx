import React from 'react'
import "../Styles/Layout.css"
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = () => {

  return (
    <>
      <header className='wrapper'><Navbar /></header>
      <Outlet/>
      <footer className='wrapper'><Footer/></footer>
    </>
  )
}

export default Layout

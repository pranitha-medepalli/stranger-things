import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-logo">STRANGER THINGS</div>

      <ul className="nav-links">
  <li><a href="#home">Home</a></li>
  <li><a href="#characters">Characters</a></li>
  <li><a href="#upside-down">Upside Down</a></li>
</ul>

    </nav>
  )
}

export default Navbar

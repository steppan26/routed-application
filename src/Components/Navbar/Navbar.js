import React, { useContext } from 'react'
import './navbar.css'
import { MainContext } from 'App'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const context = useContext(MainContext)
  const {toggleTheme} = useContext(MainContext)

  return(
    <div className="navbar-container">
      <nav style={context.theme} className="navbar">
        <div className="container-fluid">
          <div className="display-flex-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
          </div>
          <div className="switch-button">
            <button className="btn btn-primary" onClick={toggleTheme}> switch theme</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

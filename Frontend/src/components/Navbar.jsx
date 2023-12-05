import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser} from '@fortawesome/free-solid-svg-icons'
import logo from "/argentBankLogo.png"


const Navbar = () => {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className="main-nav-item" to="/login">
        <FontAwesomeIcon icon={faCircleUser} className="fontawesome-icon" />
          Sign In
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
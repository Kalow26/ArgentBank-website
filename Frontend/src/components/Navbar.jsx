import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">home</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  )
}

export default Navbar
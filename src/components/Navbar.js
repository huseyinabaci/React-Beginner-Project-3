import React from 'react';
import { Link, NavLink, useNavigate  } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/about")
    },200000)
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke' Times</a>
        <ul className="right">
          <li><NavLink exact="true" to="/">Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar
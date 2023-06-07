import React from 'react'
import './styles/Nav.css'
import { Link, NavLink } from 'react-router-dom'

function Nav({value, clickhandle}) {
  return (
    <nav className={`nav-container ${value}`}>
        <div className='close-nav'>
            <i className="fa fa-times" onClick={clickhandle}></i>
        </div>
        <NavLink to='/' onClick={clickhandle}>Home</NavLink>
        <NavLink  to='findings' onClick={clickhandle}>Findings</NavLink>
        <NavLink  to='projects' onClick={clickhandle}>Projects</NavLink>
        <NavLink  to='contact' onClick={clickhandle}>Contact</NavLink>
    </nav>
  )
}

export default Nav
import React from 'react'
//import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    
    <div className="navbar navbar-expand-lg navbar-light bg-light">
       <div className='logo'>
          <NavLink className="navbar-brand" href="#">Navbar</NavLink>
       </div>
    
     
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Registration</NavLink>
        </li>
      
      </ul>
      
    </div>
  </div>

    
    </div>
  )
}

export default Navbar
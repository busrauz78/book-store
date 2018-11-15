import React from 'react'
import {NavLink,Link} from 'react-router-dom';
const Navbar =()=> {
 
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">BookStore</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item"><NavLink className="nav-link text-light" to="/">Create</NavLink></li> 
     <li className="nav-item"><NavLink className="nav-link text-light" to="/">Favourites</NavLink></li>
     <li className="nav-item"><NavLink to="/" className=" nav-link text-light"><i className="fas fa-shopping-basket" ></i><span className="badge">5</span></NavLink></li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar;
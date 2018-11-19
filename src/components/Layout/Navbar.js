import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
    <nav className="nav-wrapper black">
      <div className="container">
     <Link className="brand-logo" to="/">
          BookStore
        </Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="/">
              Favourites
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className=" nav-link text-light">
              <i className="fas fa-shopping-basket" />
              <span className="badge">5</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  
</div>
  );
};

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
      <>
        <nav>
            <div className="nav-wrapper purple darken-1 px2">
              <NavLink to="/" className="brand-logo">React & TypeScript</NavLink>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">To-Do List</NavLink></li>
                <li><NavLink to="/about">About project</NavLink></li>
              </ul>
            </div>
        </nav>
                  {/* Here is mobile menu */}
        <ul className="sidenav" id="mobile-demo">
            <li><NavLink to="/" className="sidenav-close">To-Do List</NavLink></li>
            <li><NavLink to="/about" className="sidenav-close">About project</NavLink></li>
        </ul>
      </>
    );
};

export default Navbar;
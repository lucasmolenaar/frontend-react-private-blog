import React from 'react';
import './NavBar.css';

import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><NavLink exact to="/" activeClassName="active-link" className="nav-link">Home</NavLink></li>
                <li><NavLink exact to="/login" activeClassName="active-link" className="nav-link">Login</NavLink></li>
                <li><NavLink exact to="/blogposts" activeClassName="active-link" className="nav-link">Blog Overzicht</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
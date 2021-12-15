import React from 'react';
import './NavBar.css';

import { NavLink, useHistory } from "react-router-dom";

const NavBar = ({ isAuthenticated, toggleAuthentication }) => {
    const history = useHistory();

    const handleLogout = () => {
        toggleAuthentication(!isAuthenticated);
        history.push("/");
    }

    return (
        <nav className="navbar">
            {
                isAuthenticated ?
                    <ul className="nav-links">
                        <li><NavLink exact to="/" activeClassName="active-link" className="nav-link">Home</NavLink></li>
                        <li><NavLink onClick={handleLogout} exact to="/login" activeClassName="active-link" className="nav-link">Log uit</NavLink></li>
                        <li><NavLink exact to="/blogposts" activeClassName="active-link" className="nav-link">Blog Overzicht</NavLink></li>
                    </ul>
                    :
                    <ul className="nav-links">
                        <li><NavLink exact to="/" activeClassName="active-link" className="nav-link">Home</NavLink></li>
                        <li><NavLink exact to="/login" activeClassName="active-link" className="nav-link">Log in</NavLink></li>
                    </ul>
            }

        </nav>
    );
}

export default NavBar;
import React from 'react';
import './LoginPage.css';
import {Link} from "react-router-dom";

const LoginPage = ({ isAuthenticated, toggleAuthentication }) => {
    return (
        <div className="login-page">
            <Link to="/blogposts">
                <button
                    type="button"
                    className="login-btn"
                    onClick={() => toggleAuthentication(!isAuthenticated)}
                >
                    Login
                </button>
            </Link>
        </div>
    );
};

export default LoginPage;
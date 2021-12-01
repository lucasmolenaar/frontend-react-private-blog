import React from 'react';
import './LoginPage.css';
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="login-page">
            <Link to="/blogposts">
                <button
                    type="button"
                    className="login-btn"
                >
                    Login
                </button>
            </Link>
        </div>
    );
};

export default LoginPage;
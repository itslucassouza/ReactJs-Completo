import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


function Header(){
    return(
        <header className="main-Header">
            <div className="header-content">
                <Link to="/">
                    Blog programador
                </Link>
                <Link to="/login">
                    Entrar
                </Link>
            </div>
        </header>
    );
}

export default Header;


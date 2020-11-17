import React, { Component } from 'react';
import { Link } from  'react-router-dom';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <div className="primary">
                <Link to="/"> RevhoFlix </Link>
            </div>
        );
    }
}

export default Header;
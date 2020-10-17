import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => (
    <header className="header-container">
        <Link to="/">
            <div className="logo-text">
                Bootcamp DevSuperior
            </div>
        </Link>
    </header>
);

export default Header;
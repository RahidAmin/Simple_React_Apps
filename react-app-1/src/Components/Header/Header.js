import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='headerClass bg-primary text-white'>
            <a href="home">Home</a>
            <a href="countries">Countries</a>
            <a href="aboutUs">About-Us</a>
            </nav>
            
        </div>
    );
};

export default Header;
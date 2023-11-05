import React from 'react';
import './Header.css'
import logo from '../../Images/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    const DarkMode=()=>
    {
                {
                   
                    let element = document.body;
                    element.classList.toggle("dark-mode")
                }    
    }
    return (
        <nav className='HeaderClass'>
            
            <img src={logo} alt="" />
            <button style={{backgroundColor:"#1C2B35",color:"white",borderRadius:"20px"}} onClick={()=>DarkMode()}>
                <FontAwesomeIcon icon={faCircleHalfStroke}/>
                Dark</button>
         
           
           
            <div>
            <a href="/shop">Shop</a>
            <a href="/order">Order</a>
            <a href="/inventory">Inventory</a>
            <a href="/login">Login</a>
            </div>
        </nav>
    );
};




export default Header;
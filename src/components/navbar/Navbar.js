import React from 'react';

// styles 
import "./navbar.css"

// Icons
import { RiMenu3Line, RiClosenLin } from "react-icons/ri"
import logo from "../../assets/logo.svg"


const Navbar = () => {
    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                 <div className='gpt3__bavbar-links_logo'>
                      <img src={logo} alt="logo" />
                 </div>
                 <div className='gpt3__navbar-links_container'>
                    <p><a href="#Home">Home</a></p>
                    <p><a href="#wgpt3">What is GPT3</a></p>
                    <p><a href="#possibility">Open AI</a></p>
                    <p><a href="#feature">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                 </div>
            </div>
        </div>
    );
};

export default Navbar;
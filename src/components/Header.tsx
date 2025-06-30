import './Header.css';
import logo from '../assets/logo.svg'
import React, {JSX, useState } from 'react';

const Header = (): JSX.Element => {

    const [mobileOpen, setMobileOpen] = useState(false);
;
    const toggleMobileMenu = () => {
        setMobileOpen(!mobileOpen);
    }

    return (
     <>
        <header className='header'>
            <div className='header-wrapper'>
                <div className='header-icon'>
                    <a href='#'>
                        <img src={logo} alt="Logo"/>
                    </a>
                </div>
                <nav className='header-menu'>
                    <div className='header-menu-wrapper desktop-menu'>
                        <a className='header-menu-item' href='#experience'>Work Experience</a>
                        <a className='header-menu-item' href='#education'>Education</a>
                        <a className='header-menu-item' href='#skills'>Skills</a>
                        <a className='header-menu-item' href='#projects'>Projects</a>
                        <a className='header-menu-item' href='#contacts'>Contacts</a>
                    </div>
                </nav>
                <div className='burger' onClick={()=> toggleMobileMenu()}>
                    {mobileOpen ? '✕' : '☰'}
                </div>
            </div>

             <>
                <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
                    <a href="#experience" onClick={toggleMobileMenu}>Work Experience</a>
                    <a href="#education" onClick={toggleMobileMenu}>Education</a>
                    <a href="#skills" onClick={toggleMobileMenu}>Skills</a>
                    <a href="#projects" onClick={toggleMobileMenu}>Projects</a>
                    <a href="#contacts" onClick={toggleMobileMenu}>Contacts</a>
                </div>
             </>
      
        </header>
     </>
 );
}

export default Header
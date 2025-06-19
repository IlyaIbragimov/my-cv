import './Header.css';
import logo from '../assets/logo.svg'

const Header = () => {
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
                    <div className='header-menu-wrapper'>
                        <a className='header-menu-item' href='#experience'>Work Experience</a>
                        <a className='header-menu-item' href='#education'>Education</a>
                        <a className='header-menu-item' href='#skills'>Skills</a>
                        <a className='header-menu-item' href='#projects'>Projects</a>
                        <a className='header-menu-item' href='#contacts'>Contacts</a>
                    </div>
                </nav>
                <div className='burger' onClick={()=> toggleMobileMenu()}>
                    ☰
                </div>
            </div>
        </header>
     </>
 );
}

export default Header
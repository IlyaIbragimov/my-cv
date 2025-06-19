import './Header.css';
import logo from '../assets/logo.svg'

const Header = () => {
    return (
     <>
        <header className='header'>
            <div className='header-wrapper'>
                <div className='header-icon'>
                    <img src={logo} alt="Logo"/>
                </div>
                <nav className='header-menu'>
                    <div className='header-menu-wrapper'>
                        <a href='#experience'>Work Experience</a>
                        <a href='#education'>Education</a>
                        <a href='#skills'>Skills</a>
                        <a href='#projects'>Projects</a>
                        <a href='#contacts'>Contacts</a>
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
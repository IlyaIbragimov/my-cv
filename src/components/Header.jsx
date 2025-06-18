import './Header.css';

const Header = () => {
    return (

        <header className='header'>
            <div className='header-wrapper'>
                <h1>About me</h1>

                <p className='header-text'>
                Results-oriented IT professional with over 5 years of experience in technical support, file localization, and backend development.
                Proven ability to diagnose and resolve complex production issues, automate workflows, and collaborate across teams.
                </p>

                <nav className='header-menu'>
                    <div className='header-menu-wrapper'>
                        <a href='#experience'>Work Experience</a>
                        <a href='#education'>Education</a>
                        <a href='#skills'>Skills</a>
                        <a href='#projects'>Projects</a>
                        <a href='#contacts'>Contacts</a>
                    </div>
                </nav>
            </div>
        </header>

    );
}

export default Header
import './Footer.css';

const Footer = () => {

    return (

        <>
        <footer className='footer'>
            <div className='footer-wrapper'>
                <div className='footer-section'>
                <p className='footer-copy'>© 2025 Ilya Ibragimov. All Rights Reserved.</p>
                </div>
                <div className='footer-section'>
                <ul className='footer-list'>
                    <li><a href='https://github.com/IlyaIbragimov'>GitHub</a></li>
                    <li><a href='https://www.linkedin.com/in/ilya-ibragimov-a78628224/'>LinkedIn</a></li>
                </ul>
                </div>
            </div>
        </footer>
        </>
    )

}

export default Footer;
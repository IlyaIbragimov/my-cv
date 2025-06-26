import './About.css';
import photo from '../assets/photo.PNG';

const About = () => {
    return (
            <section className='about-section' id='about'>
                <div className='about-wrapper'>
                    <div className='about-image'>
                        <div className='about-image-wrapper'>
                            <img src={photo} alt="Ilya Ibragimov photo"/>
                        </div>
                    </div>
                    <div className='about-text'>
                        <div className='about-text-title'>
                            <h1>About me</h1>
                        </div>
                        <div className='about-text-info'>
                            <p>An experienced IT support specialist with over 7 years of experience in support roles. Demonstrated expertise in quality assurance as a localization engineer, ensuring the accuracy of the translation process from a technical perspective. As a support engineer, effectively resolved various technical issues using different software tools. Throughout my career, I have gained extensive knowledge in programming and acquired practical experience in developing and supporting backend applications.</p>
                        </div>
                        <div className='about-button'>
                            <a href='#' className='about-button-resume'>See Resume</a>
                        </div>
                        <div className='about-button'>
                            <a href='#' className='about-button-contacts'>Contact me</a>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default About
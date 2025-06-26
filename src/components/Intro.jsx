import './Intro.css';
import intro from '../assets/intro.png';

const Intro = () => {

    return (

        <section className='intro-section' id='intro'>
            <div className='intro-wrapper'>
                <div className='intro-text'>
                    <div className='intro-text-title'>
                        <h1>Ilya Ibragimov</h1>
                    </div>
                    <div className='intro-text-subtitle'>
                        <h3>Technical Support Specialist</h3>
                    </div>
                    <div className='intro-text-info'>
                        <p>An experienced IT support specialist with over 7 years of experience in support roles.</p>
                    </div>
                </div>
                <div className='intro-image'>
                    <img src={intro} alt="Intro visual"/>
                </div>
            </div>
        </section>

    )
}

export default Intro
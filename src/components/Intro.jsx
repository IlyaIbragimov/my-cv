import './Intro.css';
import intro from '../assets/intro.png';

const Intro = () => {

    return (

        <section className='intro-section' id='intro'>
            <div className='intro-wrapper'>
                <div className='into-text'>
                    <div className='into-text-title'>
                        <h1>Ilya Ibragimov</h1>
                    </div>
                    <div className='into-text-subtitle'>
                        <h3>Technical Support Specialist</h3>
                    </div>
                    <div className='into-text-info'>
                        <p>An experienced IT support specialist with over 7 years of experience in support roles.</p>
                    </div>
                </div>
                <div className='intro-image'>
                    <img src={intro}/>
                </div>
            </div>
        </section>

    )
}

export default Intro
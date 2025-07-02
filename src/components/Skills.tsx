import './Skills.css';
import SkillCart from './SkillCart'


const Skills: React.FC = () => {
    return(
        <>
        <section className='skill-section'>
            
            <div className='skill-wrapper'>

                <div className='skill-title'>
                    <h1>Skills</h1>
                </div>

                <div className='skill-content'>

                    <div className='skill-language'>
                        <div className='language-title'>
                            <h3>Languages</h3>
                        </div>
                        <div className='language-list'>
                            <ul>
                                <li>Czech - </li>
                                <li>English - </li>
                                <li>Russian - Native Speaker</li>
                            </ul>
                        </div>
                    </div>

                    <div className='skill-grid'>
                        <SkillCart
                            title='Programming & Frameworks'
                            points={['Java', 'Spring Boot', 'Hibernate']}
                        />

                        <SkillCart
                            title='Database & Query Tools'
                            points={['Oracle SQL Developer', 'ElasticSearch']}
                        />

                        <SkillCart
                            title='Build & Version Control'
                            points={['Maven', 'Git']}
                        />

                        <SkillCart
                            title='API & Integration'
                            points={['REST API']}
                        />

                        <SkillCart
                            title='Development Tools'
                            points={['IntelliJ IDEA', 'Visual Studio Code']}
                        />

                        <SkillCart
                            title='Support & Collaboration'
                            points={['Technical Support', 'Problem Solving', 'ServiceNow', 'JIRA']}
                        />
                    </div>

                </div>

            </div>

        </section>
        </>
    )

}

export default Skills



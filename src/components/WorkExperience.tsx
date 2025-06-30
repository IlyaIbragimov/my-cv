import React from 'react';
import './WorkExperience.css';
import logo from '../assets/logo.svg'




const WorkExperience: React.FC = () => {

    return (
        <>
        <section className='experience-section'>
            <div className='experience-wrapper'>
                <div className='experience-content'>
                    <div className='experience-title'>
                        <h1>Work Experience</h1>
                    </div>
                    <div className='content-block'>
                        <div className='block-image'>
                            <a href='https://www.csob.cz'><img src={logo}/></a>
                        </div>
                        <div className='block-info'>
                            <div className='info-title'>
                                <h2>Application Engineer, ČSOB</h2>
                            </div>
                            <div className='info-subtitle'>
                                <h4>(May 2024 - Present)</h4>
                            </div>
                            <div className='info-text'>
                                <ul className='info-text-list'>
                                    <li>Provide support for banking applications, including troubleshooting and resolving production incidents.</li>
                                    <li>Collaborate with stakeholders to define software requirements and develop solutions.</li>
                                    <li>Maintain deployment and post-deployment verication of updated software packages.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='content-block'>
                        <div className='block-image'>
                            <img src={logo}/>
                        </div>
                        <div className='block-info'>
                            <div className='info-title'>
                                <h2>Technical Support Engineer, Vocalls</h2>
                            </div>
                            <div className='info-subtitle'>
                                <h4>(July 2023 - February 2024)</h4>
                            </div>
                            <div className='info-text'>
                                <ul className='info-text-list'>
                                    <li>Investigated and identied potential solutions for complex customer issues, working with development teams to resolve software bugs.</li>
                                    <li>Troubleshot technical issues and provided both onsite and remote technical support.</li>
                                    <li>Coordinated with developers to identify root causes of system bugs and suggest fixes.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='content-block'>
                        <div className='block-image'>
                            <img src={logo}/>
                        </div>
                        <div className='block-info'>
                            <div className='info-title'>
                                <h2>Localization Engineer, TransPerfect</h2>
                            </div>
                            <div className='info-subtitle'>
                                <h4>(July 2021 - June 2023)</h4>
                            </div>
                            <div className='info-text'>
                                <ul className='info-text-list'>
                                    <li>Oversaw the technical aspects of the translation process, ensuring the seamless functionality of tools and software used for text extraction.</li>
                                    <li>Integrated translated text into the original le structures, conducted thorough testing, and resolved any arising issues.</li>
                                    <li>Addressed production-related technical problems and proposed eective solutions, including translation memory management and script development for data manipulation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='content-block'>
                        <div className='block-image'>
                            <img src={logo}/>
                        </div>
                        <div className='block-info'>
                            <div className='info-title'>
                                <h2>Senior Media Service Advisor, Conduent</h2>
                            </div>
                            <div className='info-subtitle'>
                                <h4>(January 2021 - July 2021)</h4>
                            </div>
                            <div className='info-text'>
                                <ul className='info-text-list'>
                                    <li>Managed customer portfolios and resolved 60+ service requests weekly</li>
                                    <li>Handled conict resolution and process renewalqueries with diplomacy and accuracy.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='content-block'>
                        <div className='block-image'>
                            <img src={logo}/>
                        </div>
                        <div className='block-info'>
                            <div className='info-title'>
                                <h2>Technical Support Advisor, Conduent</h2>
                            </div>
                            <div className='info-subtitle'>
                                <h4>(January 2018 - January 2021)</h4>
                            </div>
                            <div className='info-text'>
                                <ul className='info-text-list'>
                                    <li>Delivered on-site and remote support across softwareand hardware issues</li>
                                    <li>Consistently exceeded quality assurance metrics</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='experience-content'>
                    <div className='experience-title'>
                        <h1>Education</h1>
                    </div>
                    <div className='content-block'>
                        <div className='block-image'>
                            <a href='https://www.csob.cz'><img src={logo}/></a>
                        </div>
                        <div className='block-info'>
                            <div className='info-title'>
                                <h2>Greenfox Academy</h2>
                            </div>
                            <div className='info-subtitle'>
                                <h4>(May 2023 - March 2024)</h4>
                            </div>
                            <div className='info-text'>
                                <ul className='info-text-list'>
                                    <li>Designed and implemented web applications usingJava, Spring Boot, Docker, Angular, and Selenium.</li>
                                    <li>Collaborated in agile teams and participated in code reviews and deployment automation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='content-block'>
                        <div className='block-image'>
                            <img src={logo}/>
                        </div>
                        <div className='block-info'>
                            <div className='info-title'>
                                <h2>Cleverance Testing academy</h2>
                            </div>
                            <div className='info-subtitle'>
                                <h4>(January 2019 - July 2019)</h4>
                            </div>
                            <div className='info-text'>
                                <ul className='info-text-list'>
                                    <li>Gained foundational knowledge of software testing, scenario creation, and QA methodologies.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='content-block'>
                        <div className='block-image'>
                            <img src={logo}/>
                        </div>
                        <div className='block-info'>
                            <div className='info-title'>
                                <h2>BC, Charles University in Prague, Faculty of Mathematics and Physics</h2>
                            </div>
                            <div className='info-subtitle'>
                                <h4>(October 2014 - January 2018)</h4>
                            </div>
                            <div className='info-text'>
                                <ul className='info-text-list'>
                                    <li>Built strong analytical and problem-solving skillsthrough advanced coursework and lab projects.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default WorkExperience
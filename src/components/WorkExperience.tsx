import React from 'react';
import './WorkExperience.css';
import ExperienceItem from './ExperienceItem';
import logo from '../assets/logo.svg';

const WorkExperience: React.FC = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-wrapper">
        <div className="experience-content">
          <h1 className="experience-title">Work Experience</h1>

          <ExperienceItem
            logo={logo}
            title="Application Engineer, ČSOB"
            date="May 2024 – Present"
            points={[
              'Provide support for banking applications, including troubleshooting and resolving production incidents.',
              'Collaborate with stakeholders to define software requirements and develop solutions.',
              'Maintain deployment and post-deployment verification of updated software packages.',
            ]}
            link="https://www.csob.cz"
          />

          <ExperienceItem
            logo={logo}
            title="Technical Support Engineer, Vocalls"
            date="July 2023 – February 2024"
            points={[
              'Investigated and identified potential solutions for complex customer issues, working with development teams.',
              'Troubleshot technical issues and provided both onsite and remote support.',
              'Coordinated with developers to identify root causes of system bugs.',
            ]}
          />

          <ExperienceItem
            logo={logo}
            title="Localization Engineer, TransPerfect"
            date="July 2021 – June 2023"
            points={[
              'Oversaw technical aspects of the translation process and tool functionality.',
              'Integrated translations and resolved related issues during QA.',
              'Managed translation memory and created automation scripts.',
            ]}
          />

          <ExperienceItem
            logo={logo}
            title="Senior Media Service Advisor, Conduent"
            date="January 2021 – July 2021"
            points={[
              'Managed customer portfolios and resolved 60+ service requests weekly.',
              'Handled conflict resolution and process renewals accurately.',
            ]}
          />

          <ExperienceItem
            logo={logo}
            title="Technical Support Advisor, Conduent"
            date="January 2018 – January 2021"
            points={[
              'Delivered on-site and remote support across software and hardware.',
              'Consistently exceeded quality assurance metrics.',
            ]}
          />
        </div>

        {/* Education*/}
        <div className="experience-content">
          <h1 className="experience-title">Education</h1>

          <ExperienceItem
            logo={logo}
            title="Greenfox Academy"
            date="May 2023 – March 2024"
            points={[
              'Designed web apps using Java, Spring Boot, Docker, Angular.',
              'Participated in code reviews, deployment, and agile collaboration.',
            ]}
          />

          <ExperienceItem
            logo={logo}
            title="Cleverance Testing Academy"
            date="January 2019 – July 2019"
            points={['Learned QA methodologies, scenario creation, and testing basics.']}
          />

          <ExperienceItem
            logo={logo}
            title="Charles University in Prague, Faculty of Mathematics and Physics"
            date="October 2014 – January 2018"
            points={['Built strong analytical and problem-solving skills via advanced coursework.']}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;


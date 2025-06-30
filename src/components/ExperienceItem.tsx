import React from 'react';

interface ExperienceItemProps {
    title: string;
    date: string;
    logo: string;
    points: string[];
    link?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, date, logo, points, link }) => {
    return (
        <div className='content-block fade-in'>
            <div className='block-image'>
                {link ? (
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                        <img src={logo} alt='Company logo' />
                    </a>
                ) : (
                    <img src={logo} alt='Company logo' />
                )}
            </div>
            <div className='block-info'>
                <h2 className='info-title'>{title}</h2>
                <h4 className='info-subtitle'>{date}</h4>
                <ul className='info-text-list'>
                    {points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceItem;

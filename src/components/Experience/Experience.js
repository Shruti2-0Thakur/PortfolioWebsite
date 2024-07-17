import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';
import png1 from './png1.png';

import { experienceData } from '../../data/experienceData';
import ExperienceCard from './ExperienceCard';

function Experience() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="experience" id="experience" style={{ backgroundColor: theme.secondary }}>
            <div className="experience-body">
            
                <div className="experience-description">
                    <h1 style={{ color: theme.primary }}>Experience</h1>
                    {experienceData.map(exp => (
                        <ExperienceCard
                            key={exp.id}
                            id={exp.id}
                            role={exp.role}
                            company={exp.company}
                            logo={exp.logo}
                            period={exp.period}
                            details={exp.details}
                            certificates={exp.certificates}
                        />
                    ))}
                </div>
                <div className="experience-image1">
                     <img  src={png1} alt="" />
                 </div>
            </div>
        </div>
    );
}

export default Experience;

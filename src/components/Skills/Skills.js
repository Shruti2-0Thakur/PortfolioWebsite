import React, { useContext, useState } from 'react';
import Marquee from "react-fast-marquee";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsImage } from '../../utils/skillsImage';
import './Skills.css';

const skillsCategories = [
    {
        name: 'Frontend',
        skills: ['React', 'HTML', 'CSS', 'JavaScript']
    },
    {
        name: 'Backend',
        skills: ['Node.js', 'MongoDB', 'Express.js']
    },
    {
        name: 'Programming Languages',
        skills: ['C++', 'Java']
    },
    {
        name: 'Tools & Technologies',
        skills: ['VS Code', 'Git', 'Docker']
    }
];

function Skills() {
    const { theme } = useContext(ThemeContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <div className="slick-next"></div>,
        prevArrow: <div className="slick-prev"></div>
    };

    return (
        <div className="skills" style={{ backgroundColor: theme.secondary }}>
           
            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>Skills</h2>
            </div>
            // <p style={{ color: theme.tertiary }}>[Total Slides - 4]</p>
            <div className="skillsContainer">
                <Slider {...settings}>
                    {skillsCategories.map((category, index) => (
                        <div key={index} className="skillsCategoryCard">
                            <h3 style={{ color: theme.primary }}>{category.name}</h3>
                            <div className="skill--scroll">
                                <Marquee 
                                    gradient={false} 
                                    speed={80} 
                                    pauseOnHover={true}
                                    pauseOnClick={true} 
                                    delay={0}
                                    play={true} 
                                    direction="left"
                                >
                                    {category.skills.map((skill, id) => (
                                        <div 
                                            className="skill--box" 
                                            key={id} 
                                            style={skillBoxStyle}
                                            onMouseEnter={() => setIsModalOpen(true)}
                                        >
                                            <img src={skillsImage(skill)} alt={skill} />
                                            <h3 style={{ color: theme.tertiary }}>{skill}</h3>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Skills;

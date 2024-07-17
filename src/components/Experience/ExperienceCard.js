import { makeStyles } from '@material-ui/core/styles';
import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import Fade from 'react-reveal/Fade';
import Slider from 'react-slick';

import { ThemeContext } from '../../contexts/ThemeContext';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './Experience.css';

Modal.setAppElement('#root');

function ExperienceCard({ id, role, company, logo, period, details, certificates }) {
    const { theme } = useContext(ThemeContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const useStyles = makeStyles(() => ({
        experienceCard: {
            backgroundColor: theme.secondary,
            border:'2px solid #86b6ce',
            
            "&:hover": {
               backgroundColor: theme.primary600,
            },
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            margin: '20px 0',
            padding: '20px',
            transition: 'background-color 0.3s ease',
        },
        modalContent: {
            color: theme.tertiary,
            padding: '20px',
        },
        modalHeader: {
           
            color: theme.primary,
            marginBottom: '10px',
        },
        modalHeader1: {
            marginTop: '5%',
            color: theme.primary,
            marginBottom: '10px',
        },
        description: {
            marginTop: '10px',
            color: theme.tertiary70,
        },
        button: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            border: 'none',
            borderRadius: '5px',
            padding: '10px 15px',
            cursor: 'pointer',
            marginTop: '10px',
        },

        
        closeButton: {
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            outline: 'none',
            padding: '5px',
        },
        closeIcon: {
            color: theme.primary,
            fontSize: '34px', // Adjust size as needed
        },
    }));

    const classes = useStyles();

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{ backgroundColor: theme.secondary }}>
                    <img src={logo} alt={`${company} logo`} />
                </div>
                <div className="experience-details">
                    <h6 style={{ color: theme.tertiary80 }}>{period}</h6>
                    <h4 style={{ color: theme.tertiary }}>{role}</h4>
                    <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
                    <button onClick={openModal} className="button-21">View More</button>
                </div>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Experience Details" className="Modal" overlayClassName="Overlay">

                <div className={classes.modalContent}>
                <button onClick={closeModal} className={classes.closeButton}>
                        <span className={classes.closeIcon}>×</span>
                    </button>
                    <h2 className={classes.modalHeader}>{role} at {company}</h2>
                    <p className={classes.description}>{details}</p>
                    
                    <h3 className={classes.modalHeader1}>Certificates</h3>
                    <div className='cent'>
                    <Slider {...settings}>
                        {certificates.map((certificate, index) => (
                            <div className='certificate-container' key={index}>
                                <img className='certificate-img' src={certificate} alt={`Certificate ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                    </div>
                </div>
                
            </Modal>
        </Fade>
    );
}

export default ExperienceCard;

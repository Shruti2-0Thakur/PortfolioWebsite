import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext, useState } from 'react';
import star from "../../assets/experience/B_Star.png";
import bit from "../../assets/experience/bit.jpg";
import { ThemeContext } from '../../contexts/ThemeContext';

import "./Achievements.css";

const Achievements = () => {
    const { theme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);

    const useStyles = makeStyles(() => ({
        container: {
            display: 'flex',
            flexDirection: 'column', // Change to column for smaller screens
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '6% 9%',
            backgroundColor: theme.secondary,
            color: theme.tertiary,
            '@media (min-width: 768px)': {
                flexDirection: 'row', // Change to row for larger screens
            },
        },
        card: {
            color: theme.secondary,
            backgroundColor: theme.primary,
            padding: '20px',
            borderRadius: '10px',
            width: '100%',
            marginBottom: '20px', // Add margin for spacing between cards on small screens
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            '@media (min-width: 768px)': {
                width: '48%', // Adjust width for larger screens
                marginBottom: '0', // Remove margin for larger screens
            },
        },
        card1: {
            color: theme.primary,
            backgroundColor: theme.secondary,
            padding: '20px',
            borderRadius: '10px',
            width: '100%',
            marginBottom: '20px', // Add margin for spacing between cards on small screens
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            border: `2px solid ${theme.primary}`,
            '@media (min-width: 768px)': {
                width: '48%', // Adjust width for larger screens
                marginBottom: '0', // Remove margin for larger screens
            },
        },
        cardTitle: {
            fontSize: '24px',
            marginBottom: '15px',
            color: theme.secondary,
            borderBottom: `2px solid ${theme.secondary}`,
            paddingBottom: '10px',
        },
        cardTitle1: {
            fontSize: '24px',
            marginBottom: '15px',
            color: theme.primary,
            borderBottom: `2px solid ${theme.primary}`,
            paddingBottom: '10px',
        },
        cardContent: {
            fontSize: '20px',
            marginBottom: '15px',
            lineHeight: '1.6',
        },
        button: {
            backgroundColor: theme.secondary,
            color: theme.tertiary,
            border: 'none',
            padding: '10px 20px',
            borderRadius: '15px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, transform 0.3s',
            '&:hover': {
                backgroundColor: theme.secondary50,
                transform: 'translateY(-2px)',
            },
        },
        profileItem: {
            display: 'flex',
            alignItems: 'center',
            marginTop: '20px',
            '@media (max-width: 768px)': {
                flexDirection: 'column', // Stack items vertically on smaller screens
                alignItems: 'flex-start', // Align items to the start
            },
        },
        profileImg: {
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            marginRight: '20px',
            objectFit: 'cover',
            '@media (max-width: 768px)': {
                marginRight: '0', // Remove right margin on smaller screens
                marginBottom: '10px', // Add bottom margin on smaller screens
            },
        },
        profileTitle: {
            fontSize: '20px',
            margin: 0,
            color: theme.primary,
            marginBottom: '10px',
        },
        profileText: {
            fontSize: '16px',
            margin: 0,
            color: theme.tertiary70,
            marginBottom: '10px',
        },
        modalContent: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%', // Make modal responsive
            maxWidth: 500, // Set a max width for larger screens
            backgroundColor: theme.primary50,
            boxShadow: '0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2)',
            padding: '20px',
            borderRadius: '10px',
        },
        modalImage: {
            width: '100%',
            border: '8px solid #000',
            borderRadius: '10px',
        },
        closeButton: {
            position: 'absolute',
            top: '10px',
            right: '10px',
            color: theme.secondary,
            cursor: 'pointer',
            fontSize: '34px',
            backgroundColor: 'transparent',
            border: 'none',
            '&:hover': {
                color: theme.secondary50,
            },
        },
    }));
    
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.container}>
            <div className={classes.card}>
                <h2 className={classes.cardTitle}>Star Performer</h2>
                <p className={classes.cardContent}>
                    Awarded Star Performer of April at Bharathisoft Nextgen Solutions Limited for outstanding performance and significant contributions during my internship.
                </p>
                <button className={classes.button} onClick={handleOpen}>View Award →</button>
                <Modal open={open} onClose={handleClose}>
                    <div className={classes.modalContent}>
                        <button className={classes.closeButton} onClick={handleClose}>×</button>
                        <h2>Star Performer Award</h2>
                        <img src={star} alt="Certificate" className={classes.modalImage} />
                    </div>
                </Modal>
            </div>
            <div className={classes.card1}>
                <h2 className={classes.cardTitle1}>Extra Curricular Activities</h2>
                <div className={classes.profileItem}>
                    <img src={bit} alt="Fine Art Society" className={classes.profileImg} />
                    <div>
                        <h3 className={classes.profileTitle}>President of Fine Art Society, BIT MESRA</h3>
                        <p className={classes.profileText}>
                            Managed a team of 80+ members, organized and managed festivals, competitions, and events.
                        </p>
                        <p className={classes.profileText}>
                            Through this experience, I enhanced my leadership, project management, and communication skills, learning the importance of teamwork and effective coordination.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;

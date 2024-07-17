import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';


import './Education.css';

function EducationCard({ id, institution, course, startYear, endYear }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`} >
                <div className="educard-img" style={{backgroundColor: theme.secondary70}}>
                    <img src="" alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{color: theme.secondary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.secondary50}}>{course}</h4>
                    <h5 style={{color: theme.secondary70}}>{institution}</h5>
                </div>
            </div>
        </Fade>        
    )
}

export default EducationCard

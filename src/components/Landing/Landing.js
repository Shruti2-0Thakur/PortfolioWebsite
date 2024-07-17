import { Button, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useState } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import ReactTypingEffect from 'react-typing-effect';
import RESUME from '../../assets/pdf/resume1.pdf';
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";
import mj from "./about2.png";
import "./Landing.css";
import Modal from './Modal';

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Landing() {
  const { theme, drawerOpen } = useContext(ThemeContext);
  const themeMaterialUI = useTheme(); // Access Material-UI theme

  const useStyles = makeStyles(() => ({
    resumeBtn: {
      color: theme.primary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      fontSize: "1rem",
      fontWeight: "500",
      height: "50px",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.tertiary,
        color: theme.secondary,
        border: `3px solid ${theme.tertiary}`,
      },
    },
    downloadBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      height: "50px",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [themeMaterialUI.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      height: "50px",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [themeMaterialUI.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = RESUME;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="landing">
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="LinkedIn"
                />
              </a>
            )}
            {socialsData.leetCode && (
              <a href={socialsData.leetCode} target="_blank" rel="noreferrer">
                <SiLeetcode
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="Leetcode"
                />
              </a>
            )}

            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="GitHub"
                />
              </a>
            )}
            {socialsData.instagram && (
              <a href={socialsData.instagram} target="_blank" rel="noreferrer">
                <FaInstagram
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="Instagram"
                />
              </a>
            )}
            {socialsData.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                <FaTwitter
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="Twitter"
                />
              </a>
            )}

            {socialsData.facebook && (
              <a href={socialsData.facebook} target="_blank" rel="noreferrer">
                <FaFacebook
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="Facebook"
                />
              </a>
            )}
          </div>
        </div>
        <img
          src={mj}
          alt=""
          className="landing--img"
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: theme.secondary,
          }}
        />
        <div
          className="landing--container-right"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="lcr--content" style={{ color: theme.tertiary }}>
            <h6>
              <ReactTypingEffect
                text={["Programmer", "Aspiring Software Developer", "MERN Developer"]}
                speed={100}
                eraseSpeed={100}
                eraseDelay={2000}
                typingDelay={500}
              />
            </h6>
            <h1>{headerData.name}</h1>
            <p>{headerData.desciption}</p>

            <div className="lcr-buttonContainer">
              <Button onClick={handleDownload} className={classes.downloadBtn}>
                Download
              </Button>
              <Button onClick={openModal} className={classes.resumeBtn}>
                View Resume
              </Button>
              <NavLink to="/#contacts" smooth={true} spy={true} duration={2000}>
                <Button className={classes.contactBtn}>Contact</Button>
              </NavLink>

              <Modal show={showModal} onClose={closeModal}>
                <iframe
                  src={RESUME}
                  style={{ width: '100%', height: '80vh' }}
                  title="Resume"
                />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;

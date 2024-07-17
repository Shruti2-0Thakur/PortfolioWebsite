import React from 'react';
import Modal from 'react-modal';
import './Skills.css';

Modal.setAppElement('#root');

function SkillsModal({ isOpen, onRequestClose, skills, theme }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="skillsModal"
            overlayClassName="skillsOverlay"
        >
            <button onClick={onRequestClose} className="closeModalButton" style={{ color: theme.tertiary }}>X</button>
            <h2 style={{ color: theme.primary }}>Skills Overview</h2>
            <div className="skillsContent">
                {skills.map((category, index) => (
                    <div key={index} className="skillsCategory">
                        <h3 style={{ color: theme.secondary }}>{category.name}</h3>
                        <ul>
                            {category.skills.map((skill, idx) => (
                                <li key={idx} style={{ color: theme.tertiary }}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Modal>
    );
}

export default SkillsModal;

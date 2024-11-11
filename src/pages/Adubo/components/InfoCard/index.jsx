import React from 'react';

import './styles.scss';

const InfoCard = ({ title, description, image, buttonText, reverse }) => {
    return (
        <div className='info-card-container'>
            <div className={`info-card ${reverse ? 'reverse' : ''}`}>
                <div className="info-content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <button className='hoverEffect'>{buttonText}</button>
                </div>
                <div className="info-image">
                    <img src={image} alt={title} />
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
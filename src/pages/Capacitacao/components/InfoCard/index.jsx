import React from 'react';

import './styles.scss';

const InfoCard = ({ title, description, image, buttonText, reverse, duration }) => {
    return (
        <div className='info-card-container'>
            <div className={`info-card ${reverse ? 'reverse' : ''}`}>
                <div className="info-content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    {duration && <p>Duração: {duration}</p>}
                    <button className='hoverEffect'>
                        <span>
                            ▶
                        </span>
                        {buttonText}
                    </button>
                </div>
                <div className="info-image">
                    <img src={image} alt={title} />
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
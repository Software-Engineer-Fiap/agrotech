import React from 'react';

import './styles.scss';

const FeatureCard = ({ title, description }) => {
    return (
        <div className="feature-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default FeatureCard;

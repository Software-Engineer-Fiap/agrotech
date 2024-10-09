import React from 'react';

import './styles.scss';

const TeamMember = ({ name, role, photo }) => {
    return (
        <div className="team-member">
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    );
};

export default TeamMember;

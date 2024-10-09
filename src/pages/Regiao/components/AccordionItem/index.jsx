import React from 'react';

import './styles.scss';

const AccordionItem = ({ title, content, isActive, onClick }) => {
    return (
        <div className='accordion-item'>
            <div className='accordion-title' onClick={onClick}>
                {title}
                <span className='icon'>{isActive ? '▲' : '▼'}</span>
            </div>
            {isActive && content && (
                <div className='accordion-content'>
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

export default AccordionItem;
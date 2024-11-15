import React from 'react';

import './styles.scss';

import reactLogo from '../../assets/images/react-logo.png';
import sassLogo from '../../assets/images/sass-logo.png';
import jsLogo from '../../assets/images/js-logo.png';

import FotoAaron from '../../assets/images/fotoaaron.png';
import FotoDaniel from '../../assets/images/fotodaniel.png';
import FotoJoao from '../../assets/images/fotojoao.png';
import FotoRenato from '../../assets/images/fotorenato.png';
import FotoThiago from '../../assets/images/fotothiago.png';

const teamMembers = [
    {
        name: 'Aaron Magalhães',
        role: 'Desenvolvedor\nRedator Técnico',
        photo: FotoAaron
    },
    {
        name: 'Daniel Diniz',
        role: 'Desenvolvedor\nDesign UI/UX',
        photo: FotoDaniel
    },
    {
        name: 'João Mateus',
        role: 'Desenvolvedor\nRedator Técnico',
        photo: FotoJoao
    },
    {
        name: 'Renato Messias',
        role: 'Desenvolvedor SR\nDesign UI/UX',
        photo: FotoRenato
    },
    {
        name: 'Thiago Terra',
        role: 'Desenvolvedor\nDesign UI/UX',
        photo: FotoThiago
    }
];

const Sobre = () => {
    return (
        <div className='team-page'>
            <div className='team-page-members'>
                <div className='team-section'>
                    <h2>Quem Somos:</h2>
                    <div className='team-members'>
                        {teamMembers.map((member, index) => (
                            <div className="team-member">
                                <img src={member.photo} alt={member.name} />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='technologies-section'>
                    <h2>Tecnologias Usadas:</h2>
                    <div className='technology-icons'>
                        <img src={reactLogo} alt='React Logo' />
                        <img src={sassLogo} alt='Sass Logo' />
                        <img src={jsLogo} alt='JavaScript Logo' />
                    </div>
                </div>
            </div>
            <div className='video'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/FZcuSrFdUqo?si=p_EObKRpYc-xwdVN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default Sobre;

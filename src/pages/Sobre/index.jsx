import React from 'react';

import './styles.scss';

import TeamMember from './Components/TeamMember';

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
            <div className='team-section'>
                <h2>Quem Somos:</h2>
                <div className='team-members'>
                    {teamMembers.map((member, index) => (
                        <TeamMember
                            key={index}
                            name={member.name}
                            role={member.role}
                            photo={member.photo}
                        />
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
    );
};

export default Sobre;

import React, { useState } from 'react';

import './styles.scss';

import Footer from '../../components/Footer';

import AccordionItem from './components/AccordionItem';
import brazilMap from '../../assets/images/brasilMap.png';

const regionsData = [
    {
        title: 'REGIÃO NORTE',
        content: 'A região Norte do Brasil, com seu vasto território e predominância de florestas tropicais, possui uma agricultura concentrada em áreas de desmatamento legalizado. Os principais produtos incluem a produção de açaí, guaraná e castanha-do-pará, além de cultivos de soja e milho em algumas áreas. A região também se destaca pela extração de látex e seringueiras. Os desafios incluem a sustentabilidade agrícola e a preservação da biodiversidade.'
    },
    {
        title: 'REGIÃO NORDESTE',
        content: 'A agricultura na região Nordeste é marcada pela presença de áreas semiáridas, onde a irrigação é essencial para a produção. A cana-de-açúcar, o algodão, o sisal e o caju são produtos de destaque na região. Na fruticultura, o Nordeste é grande produtor de manga, melão e uva, especialmente no Vale do São Francisco. Os desafios incluem o combate à seca e a modernização das técnicas agrícolas.'
    },
    {
        title: 'REGIÃO CENTRO-OESTE',
        content: 'O Centro-Oeste do Brasil é uma região de grande importância para a produção de grãos e pecuária. É o principal produtor de soja, milho e algodão, além de abrigar extensas áreas de criação de gado bovino. A agricultura intensiva e a expansão da fronteira agrícola apresentam desafios para a preservação ambiental, principalmente no que diz respeito ao Cerrado. A região também tem se destacado na produção de biocombustíveis.'
    },
    {
        title: 'REGIÃO SUDESTE',
        content: 'A agricultura na região Sudeste do Brasil é altamente diversificada e produtiva, com destaque para a produção de café em Minas Gerais, cana-de-açúcar e laranja em São Paulo. A modernização tecnológica e a integração com o agronegócio são características marcantes da região, que também se destaca na produção de leite, hortaliças e frutas. Apesar da alta produtividade, a expansão agrícola traz desafios relacionados à sustentabilidade e à preservação ambiental.'
    },
    {
        title: 'REGIÃO SUL',
        content: 'A região Sul possui características climáticas que favorecem a produção de grãos, como soja, milho e trigo. É uma das principais produtoras de arroz do país, além de ser destaque na produção de carnes, como a suína e a bovina. A fruticultura, especialmente a uva e a maçã, também é importante para a economia local. O Sul é reconhecido pela tecnologia agrícola avançada e práticas de integração entre lavoura e pecuária.'
    }
];

const Regiao = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='region-page'>
            <div className='accordion'>
                {regionsData.map((region, index) => (
                    <AccordionItem
                        key={index}
                        title={region.title}
                        content={region.content}
                        isActive={index === activeIndex}
                        onClick={() => toggleAccordion(index)}
                    />
                ))}
            </div>
            <div className='map'>
                <img src={brazilMap} alt='Mapa do Brasil' />
            </div>
        </div>
    );
};

export default Regiao;
import React from 'react';

import './styles.scss';

import InfoCard from './components/InfoCard';

import waterResourcesImage from "../../assets/images/fotoIrrigacao.png"
import marketingImage from "../../assets/images/fotoEmbalagem.png"
import droneImage from "../../assets/images/fotoDrone.png"

const Capacitacao = () => {
    return (
        <div className='cap-solution-page'>
            <header className='cap-intro-section'>
                <h1>Estudos e Pesquisas para capacitação</h1>
                <p>O SeedFlow tem como objetivo capacitar pequenos agricultores através de uma combinação de cursos e pesquisas especializadas. Com o objetivo de melhorar a produtividade e a sustentabilidade no campo, a SeedFlow oferece uma plataforma interativa e acessível, onde os usuários podem acessar módulos educacionais sobre técnicas agrícolas, gestão de recursos, e práticas ambientais.</p>
            </header>
            <section className='cap-info-cards'>
                <InfoCard
                    title='Gestão de Recursos Hídricos'
                    description='Curso Focado em técnicas eficientes de uso da água, irrigação e conservação para melhorar a produtividade e reduzir desperdícios.'
                    duration="10 horas"
                    image={waterResourcesImage}
                    buttonText='INICIAR CURSO'
                    reverse={false}
                />
                <InfoCard
                    title='Marketing e Gestão de Negócios Agrícolas'
                    description='Esse curso ensina como comercializar produtos, gerenciar uma propriedade agrícola e maximizar o retorno financeiro.'
                    duration="18 horas"
                    image={marketingImage}
                    buttonText='INICIAR CURSO'
                    reverse={true}
                />
                <InfoCard
                    title='Tecnologias Digitais e Inovação no Campo'
                    description='Introduz ferramentas tecnológicas, como sistemas de gestão agrícola e sensores, para modernizar práticas e melhorar a eficiência.'
                    duration="16 horas"
                    image={droneImage}
                    buttonText='INICIAR CURSO'
                    reverse={false}
                />
            </section>
        </div>
    );
};

export default Capacitacao;

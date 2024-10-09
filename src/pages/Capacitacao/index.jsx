import React from 'react';

import './styles.scss';

import InfoCard from './components/InfoCard';

import organicFertilizerImage from '../../assets/images/organic.png';
import chemicalFertilizerImage from '../../assets/images/chemical.png';

const Capacitacao = () => {
    return (
        <div className='cap-solution-page'>
            <header className='cap-intro-section'>
                <h1>Estudos e Pesquisas para capacitação</h1>
                <p>O SeedFlow tem como objetivo capacitar pequenos agricultores através de uma combinação de cursos e pesquisas especializadas. Com o objetivo de melhorar a produtividade e a sustentabilidade no campo, a SeedFlow oferece uma plataforma interativa e acessível, onde os usuários podem acessar módulos educacionais sobre técnicas agrícolas, gestão de recursos, e práticas ambientais.</p>
            </header>
            <section className='cap-info-cards'>
                <InfoCard
                    title='Adubos Orgânicos'
                    description='Adubos orgânicos são compostos por materiais de origem vegetal ou animal, como esterco e restos de culturas. Eles aumentam sua capacidade de retenção de água e nutrientes.'
                    image={organicFertilizerImage}
                    buttonText='INICIAR CURSO'
                    reverse={false}
                />
                <InfoCard
                    title='Adubos Químicos'
                    description='Os adubos químicos são formulados industrialmente e contêm nutrientes em concentrações precisas, como nitrogênio (N), fósforo (P) e potássio (K).'
                    image={chemicalFertilizerImage}
                    buttonText='INICIAR CURSO'
                    reverse={true}
                />
                <InfoCard
                    title='Adubos Orgânicos'
                    description='Adubos orgânicos são compostos por materiais de origem vegetal ou animal, como esterco e restos de culturas. Eles aumentam sua capacidade de retenção de água e nutrientes.'
                    image={organicFertilizerImage}
                    buttonText='INICIAR CURSO'
                    reverse={false}
                />
                <InfoCard
                    title='Adubos Químicos'
                    description='Os adubos químicos são formulados industrialmente e contêm nutrientes em concentrações precisas, como nitrogênio (N), fósforo (P) e potássio (K).'
                    image={chemicalFertilizerImage}
                    buttonText='INICIAR CURSO'
                    reverse={true}
                />
                <InfoCard
                    title='Adubos Orgânicos'
                    description='Adubos orgânicos são compostos por materiais de origem vegetal ou animal, como esterco e restos de culturas. Eles aumentam sua capacidade de retenção de água e nutrientes.'
                    image={organicFertilizerImage}
                    buttonText='INICIAR CURSO'
                    reverse={false}
                />
                <InfoCard
                    title='Adubos Químicos'
                    description='Os adubos químicos são formulados industrialmente e contêm nutrientes em concentrações precisas, como nitrogênio (N), fósforo (P) e potássio (K).'
                    image={chemicalFertilizerImage}
                    buttonText='INICIAR CURSO'
                    reverse={true}
                />
            </section>
        </div>
    );
};

export default Capacitacao;

import React from 'react';

import './styles.scss';

import InfoCard from './components/InfoCard';

import organicFertilizerImage from '../../assets/images/organic.png';
import chemicalFertilizerImage from '../../assets/images/chemical.png';

const Adubo = () => {
    return (
        <div className='solution-page'>
            <header className='intro-section'>
                <h1>Temos a solução perfeita para você</h1>
                <p>Oferecemos informações detalhadas sobre sementes, recomendações personalizadas de adubos, conteúdos educativos e ferramentas de gestão, tudo projetado para transformar a maneira como esses agricultores trabalham e alavancam seus negócios.</p>
            </header>
            <section className='info-cards'>
                <InfoCard
                    title='Adubos Orgânicos'
                    description='Adubos orgânicos são compostos por materiais de origem vegetal ou animal, como esterco e restos de culturas. Eles aumentam sua capacidade de retenção de água e nutrientes.'
                    image={organicFertilizerImage}
                    buttonText='SAIBA MAIS'
                    reverse={false}
                />
                <InfoCard
                    title='Adubos Químicos'
                    description='Os adubos químicos são formulados industrialmente e contêm nutrientes em concentrações precisas, como nitrogênio (N), fósforo (P) e potássio (K).'
                    image={chemicalFertilizerImage}
                    buttonText='SAIBA MAIS'
                    reverse={true}
                />
            </section>
        </div>
    );
};

export default Adubo;

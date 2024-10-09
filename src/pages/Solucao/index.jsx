import React from 'react';

import './styles.scss';

import FeatureCard from './components/FeatureCard';

import Farm from '../../assets/images/farm-field.png';

const Solucao = () => {
    return (
        <div className='technology-page'>
            <header className='hero-section'>
                <h1>Transformando a Agricultura com Tecnologia e Conhecimento</h1>
                <h3>Empoderando Pequenos Produtores com Ferramentas Inovadoras</h3>
                <p>
                    A SeedFlow é uma plataforma inovadora que visa capacitar pequenos produtores de sementes com acesso a informações essenciais, recomendações personalizadas e ferramentas para uma produção mais eficiente...
                </p>
                <button>Acesse estudos e pesquisas</button>
            </header>

            <section className='features-section'>
                <div className='features-section-items'>
                    <FeatureCard title='Biblioteca de Sementes' description='Informações abrangentes sobre várias sementes...' />
                    <FeatureCard title='Mapeamento por região' description='Ferramentas de mapeamento regional para orientar...' />
                    <FeatureCard title='Guias e capacitação' description='Conteúdos essenciais sobre práticas agrícolas sustentáveis...' />
                </div>
                
                <div className='region-link'>
                    <a href='#'>Consulte por região ➔</a>
                </div>
            </section>

            <section className='challenges-section'>
                <h2>Os pequenos produtores de sementes enfrentam diversos desafios que dificultam seu desenvolvimento pleno. A SeedFlow visa superar esses obstáculos, incluindo:</h2>
                <div className='text-content'>
                    <div className='text-content-items'>
                        <div className='text-content-item'>Acesso Limitado à Informação: Produtores muitas vezes carecem de conhecimento atualizado sobre sementes e práticas agrícolas. O SeedFlow oferece um repositório completo de informações sobre cultivo e gestão.</div>
                        <div className='text-content-item'>Barreiras Tecnológicas e Financeiras: Pequenos produtores frequentemente não têm acesso às tecnologias e recursos financeiros necessários para modernizar suas operações. Nossa plataforma conecta os produtores a fornecedores de tecnologia e linhas de crédito acessíveis.</div>
                        <div className='text-content-item'>Gestão e Comercialização Ineficientes: Falta de capacitação em gestão e dificuldade em acessar mercados lucrativos. O SeedFlow oferece cursos e ferramentas de planejamento para melhorar a eficiência e a comercialização.</div>
                        <div className='text-content-item'>Vulnerabilidade às Mudanças Climáticas: A imprevisibilidade do clima afeta severamente as produções. Fornecemos informações sobre sementes resilientes e técnicas de manejo sustentável.</div>
                    </div>
                    <div className='image-content'>
                        <img src={Farm} alt='Campo de Plantação' /> {/* Substitua pelo caminho correto */}
                    </div>
                </div>
            </section>

            <section className='goal-section'>
                <h2>Em Alinhamento com a Meta 2.3 da ODS</h2>
                <p>A Meta 2.3 da ODS busca dobrar a produtividade e a renda de pequenos produtores até 2030, promovendo a agricultura sustentável...</p>
                <div className='goal-cards'>
                    <FeatureCard title='Oferecer produtividade' description='Ajudamos a aumentar a produtividade de pequenas...' />
                    <FeatureCard title='Aumentar a renda' description='Capacitação e acesso a mercados para que os pequenos...' />
                    <FeatureCard title='Promover sustentabilidade' description='Soluções que permitem práticas agrícolas sustentáveis...' />
                </div>
            </section>
        </div>
    );
};

export default Solucao;
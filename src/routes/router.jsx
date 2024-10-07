import React from 'react';

import {
    Route,
    Routes
} from 'react-router-dom';

import Sobre from '../pages/Home';
import Solucao from '../pages/Equipe';
import Regiao from '../pages/Contratos';
import Adubo from '../pages/Custos';
import Demandas from '../pages/Demandas';

const Router = () => {    
    return (
        <Routes>
            <Route path='/' element={<Sobre/>}/>
            <Route path='/solucao' element={<Solucao/>}/>
            <Route path='/regiao' element={<Regiao/>}/>
            <Route path='/adubo' element={<Adubo/>}/>
            <Route path='/capacitacao' element={<Demandas/>}/>
        </Routes>
    );
};

export default Router;
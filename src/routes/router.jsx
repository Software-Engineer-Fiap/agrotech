import React from 'react';

import {
    Route,
    Routes
} from 'react-router-dom';

import Sobre from '../pages/Sobre';
import Solucao from '../pages/Solucao';
import Regiao from '../pages/Regiao';
import Adubo from '../pages/Adubo';
import Capacitacao from '../pages/Capacitacao';

const Router = () => {    
    return (
        <Routes>
            <Route path='/' element={<Sobre/>}/>
            <Route path='/solucao' element={<Solucao/>}/>
            <Route path='/regiao' element={<Regiao/>}/>
            <Route path='/adubo' element={<Adubo/>}/>
            <Route path='/capacitacao' element={<Capacitacao/>}/>
        </Routes>
    );
};

export default Router;
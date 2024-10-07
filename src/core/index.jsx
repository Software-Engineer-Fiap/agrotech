import React from 'react';

import { 
    BrowserRouter 
} from 'react-router-dom';

import Router from '../routes/router';

import './styles.scss';
import '../assets/styles/global.scss';

const App = () => {
    return (
        <div className='container'>
            <div className='header'>

            </div>
            <div className='content'>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;
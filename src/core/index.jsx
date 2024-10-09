import React from 'react';

import {
    BrowserRouter
} from 'react-router-dom';

import Router from '../routes/router';

import Footer from '../components/Footer';
import Header from '../components/Header';

import Icon from '../assets/images/icon.png'

import './styles.scss';
import '../assets/styles/global.scss';

const App = () => {    
    return (
        <div className='container'>
            <Header/>

            <div className='content'>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </div>
            
            <Footer/>
        </div>
    );
};

export default App;
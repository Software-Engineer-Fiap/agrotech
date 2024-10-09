import React, { useState } from 'react';

import './styles.scss';

import Icon from '../../assets/images/icon.png';

const Header = () => {
    const setSelected = (url) => {
        const path = window.location.pathname;

        return path === url
    };
    
    return (
        <header class='header'>
            <div class='logo'>
                <img src={Icon} alt='Logo' />
                <span>SEED FLOW</span>
            </div>
            <nav class='navigation'>
                <a href='/' class={setSelected('/') && 'active'}>SOBRE</a>
                <a href='/solucao' class={setSelected('/solucao') && 'active'}>NOSSA SOLUÇÃO</a>
                <a href='/regiao' class={setSelected('/regiao') && 'active'}>REGIÕES</a>
                <a href='/adubo' class={setSelected('/adubo') && 'active'}>ADUBO</a>
                <a href='/capacitacao' class={setSelected('/capacitacao') && 'active'}>CAPACITAÇÃO</a>
            </nav>
        </header>
);
};

export default Header;
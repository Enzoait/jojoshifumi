import React from 'react';
import './Style/Header.css';

export default function Header() {
    return<>
        <div className='header'>
            <div className='links'>
                <a href="/">Accueil</a>
                <a href="/about">A propos</a>
            </div>
            <div className='connexion-box'>
                <a href="/login">Jouer</a>
            </div>
        </div>
    </>;
};

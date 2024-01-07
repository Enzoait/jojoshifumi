import React from 'react';
import './Style/Footer.css';
import GithubLogo from '../../assets/github-mark-white.svg';

export default function Footer() {
    return<>
        <div className='footer'>
            <p>Créé par <a href='https://github.com/Enzoait' target='_blank'>Enzo</a> et <a href='https://github.com/JoelaRAS' target='_blank'>Andritiana</a></p>
            <a href="https://github.com/Enzoait/jojoshifumi"><img src={GithubLogo} alt="github logo" className='github-logo'/></a>
        </div>
    </>;
};

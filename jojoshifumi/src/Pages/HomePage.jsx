import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import rockLogo from '../assets/rock.svg';
import scissorLogo from '../assets/scissor.svg';
import leafLogo from '../assets/leaf.svg';
import './Style/HomePage.css';

export default function HomePage() {
    return<>
        <Header/>
        
        <div className='main-content'>
            <div className='logo-chifoumi'>
                <img src={rockLogo} alt="" />
                <img src={leafLogo} alt="" />
                <img src={scissorLogo} alt="" />
            </div>
            <div className='title-and-description'>
                <p className='title'>Jojo Shifumi</p>
                <p className='description'>Jojo Shifumi est un jeu de <a href="https://fr.wikipedia.org/wiki/Pierre-papier-ciseaux" target='_blank'>Chifoumi</a> fait en React.</p>
                <button className='main-button'><a href="/login" className='link-button-play'>Jouer</a></button>
            </div>
            <div className='regles'>
                <p className='regles-text'>Règles du jeu :</p>
                <div className='regles-alignement'>
                    <div className='regles-box'>
                        <img src={rockLogo} alt="" />
                        <p className='title-regle'>Pierre</p>
                        <p className='description-regle'>La pierre bat les ciseaux en les cassant</p>
                    </div>
                    <div className='regles-box'>
                        <img src={leafLogo} alt="" />
                        <p className='title-regle'>Feuille</p>
                        <p className='description-regle'>La feuille bat la pierre en l'enveloppant</p>
                    </div>
                    <div className='regles-box'>
                        <img src={scissorLogo} alt="" />
                        <p className='title-regle'>Ciseaux</p>
                        <p className='description-regle'>Les ciseaux battent la feuille en la coupant</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>;
};

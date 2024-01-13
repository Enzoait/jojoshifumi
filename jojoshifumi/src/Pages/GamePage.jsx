import React, { useContext, useState } from 'react';
import { MatchListContext } from '../Contexts/MatchContext';
import { useParams } from 'react-router-dom';
import './Style/GamePage.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import rockLogo from '../assets/rock.svg';
import scissorLogo from '../assets/scissor.svg';
import leafLogo from '../assets/leaf.svg';

export default function GamePage() {
  const { matches, editMatch } = useContext(MatchListContext);
  const { matchId } = useParams();

  const match = matches.find((m) => m._id === matchId);
  const [userMove, setUserMove] = useState(null);
  const [winner, setWinner] = useState(null);

  const handleMoveSelect = async (move) => {
    setUserMove(move);

    // temp
    const updatedMatch = null;

    // Vérifie le gagnant après chaque mouvement
    const response = await fetch(`http://fauques.freeboxos.fr:3000/matches/${matchId}/turns/${match.turns.length}/winner`);
    const data = await response.json();
    setWinner(data.winner);

    // Si le match est terminé, mets à jour le backend et redirige
    if (updatedMatch.turns.length === 3) {
      const matchWinnerResponse = await fetch(`http://fauques.freeboxos.fr:3000/matches/${matchId}/winner`);
      const matchWinnerData = await matchWinnerResponse.json();
      const matchWinner = matchWinnerData.winner;
      
      await editMatch(updatedMatch, { winner: matchWinner });

    }
  };

  return <>
    <Header/>
    <div className='main-game'>
      <div className='main-game-content'>
        <div className='match-info'>
          {winner ? <h3>Le gagnant est : {winner}</h3> : <h3>Match en cours :</h3>}
          <p>Match ID: <strong>{matchId}</strong></p>
          {/* Ne pas décommenter le code entre commentaire car cela fera des erreurs */}
          <p>Joueur 1: {/*match.user1.username*/}</p>
          <p>Joueur 2: {/*match.user2 ? match.user2.username : 'En attente'*/}</p>
          <p>Sélectionnez votre mouvement :</p>
        </div>
        <div className='movement-box'>
          <img src={rockLogo} alt= 'rock' onClick={() => handleMoveSelect('rock')} className='movement'/>
          <img src={leafLogo} alt= 'leaf' onClick={() => handleMoveSelect('paper')} className='movement'/>
          <img src={scissorLogo} alt= 'scissors' onClick={() => handleMoveSelect('scissors')} className='movement'/>
        </div>
        {userMove && <p>Votre dernier mouvement : {userMove}</p> }

        <button className='connexion-button'><a href="/matchlist" className='leave-game-link'>Quitter la partie</a></button>
      </div>
    </div>
    <Footer/>
  </>;
};

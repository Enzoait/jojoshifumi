import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Contexts/UserContext';
import { MatchListContext } from '../../Contexts/MatchContext';
import './Style/MatchList.css';

export default function MatchList(){
  const { user } = useUser();
  const navigate = useNavigate();

  const { matches, fetchMatches } = useContext(MatchListContext);

  useEffect(() => {
    // Mettre à jour la liste des matches chaque fois que le composant est render
    fetchMatches();
  }, []);

  const handleMatchClick = (matchId) => {
    window.open(`/matches/${matchId}`, '_blank');//navigate(`/matches/${matchId}`);
  };

  return (
    <div className='match-list-container'>
      <h1>Liste des matchs :</h1>
        {matches.map((match) => (
          <div key={match._id} onClick={() => handleMatchClick(match._id)} className='match-box'>
            <p>Match ID: {match._id}</p>
            <p>Joueur 1: {match.user1.username}</p>
            <p>Joueur 2: {match.user2?.username || 'En attente'}</p>
          </div>
        ))}
    </div>
  );
};



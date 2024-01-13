import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Contexts/UserContext';
import { MatchListContext } from '../../Contexts/MatchContext';

const MatchList = () => {
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
    <div>
      <h3>Liste des matchs :</h3>
      <ul>
        {matches.map((match) => (
          <li key={match._id} onClick={() => handleMatchClick(match._id)}>
            Match ID: {match._id}, Joueur 1: {match.user1.username}, Joueur 2: {match.user2?.username || 'En attente'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchList;

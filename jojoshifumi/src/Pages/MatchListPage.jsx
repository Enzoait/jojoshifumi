import React, { useContext, useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { useUser } from '../Contexts/UserContext';
import { getUsernameFromLocalStorage } from '../Contexts/Actions/user-localstorage';
import MatchListProvider,{ MatchListContext } from '../Contexts/MatchContext';
import MatchList from './MatchListComponents/MatchList';


export default function MatchListPage() {
    const { user } = useUser();
    const { matches, addMatch, fetchMatches} = useContext(MatchListContext); 
  
    const [creatingMatch, setCreatingMatch] = useState(false);

    const IdMatch = uuidv4();
  
    const handleCreateMatch = async () => {
      try {
        const newMatch = await addMatch();
        console.log("Match créé avec succès:", newMatch);
        setCreatingMatch(true);
      } catch (error) {
        console.error("Erreur lors de la création du match:", error);
      }
    };

    useEffect(() => {
        if (creatingMatch) {
          setCreatingMatch(false);
          fetchMatches();
        }
      }, [creatingMatch]);
  
    return (
      <>
        <div>
          <p>Connecté en tant que : <strong>{user?.username}</strong></p>
          <p>Page de liste de matchs</p>
          <a href="/login">Déconnexion</a>
        </div>
        <div>
          <button onClick={handleCreateMatch} disabled={creatingMatch}>
            Créer un match
          </button>
          <MatchListProvider>
            <MatchList/>
          </MatchListProvider>
        </div>
      </>
    );
  }
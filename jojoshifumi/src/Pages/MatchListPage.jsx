import React, { useContext, useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { useUser } from '../Contexts/UserContext';
import { getUsernameFromLocalStorage } from '../Contexts/Actions/user-localstorage';
import MatchListProvider,{ MatchListContext } from '../Contexts/MatchContext';
import MatchList from './MatchListComponents/MatchList';


export default function MatchListPage() {
    const { user } = useUser();
    const { matches, addMatch} = useContext(MatchListContext); 
  
    const [creatingMatch, setCreatingMatch] = useState(false);

    const IdMatch = uuidv4();
  
    const handleCreateMatch = async () => {
      try {
        const newMatch = await addMatch({
          user1: {
            username: getUsernameFromLocalStorage(),
          },
          user2: null,
          turns: [],
          _id : IdMatch,
        });
        console.log("Match créé avec succès:", newMatch);
        setCreatingMatch(true);
      } catch (error) {
        console.error("Erreur lors de la création du match:", error);
      }
    };

    useEffect(() => {
        if (creatingMatch) {
            setCreatingMatch(false);
        }
      }, [creatingMatch, matches]);
  
    return (
      <>
        <div>
          <p>Connecté en tant que : <strong>{user?.username}</strong></p>
          <p>Page de liste de matchs</p>
          <a href="/login">Déconnexion</a>
        </div>
        <div>
          <h2>Liste des matchs :</h2>
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


/*import React from 'react';
import { useUser } from '../Contexts/UserContext';
import { getUsernameFromLocalStorage } from '../Contexts/Actions/user-localstorage';
import MatchListProvider from '../Contexts/MatchContext';

export default function MatchListPage() {
    const { user } = useUser();
    const username = user?.username || getUsernameFromLocalStorage();
    return<>
        <div>
            <p>Connecté en tant que : <strong>{username}</strong></p>
            <p>Page de liste de matchs</p>
            <a href="/login">Déconnexion</a>
        </div>
        <div>
            <h2>Liste des matchs :</h2>
            <MatchListProvider>

            </MatchListProvider>
        </div>
    </>;
};*/
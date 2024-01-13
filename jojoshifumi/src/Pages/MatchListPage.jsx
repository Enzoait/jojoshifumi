import React, { useContext, useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { useUser } from '../Contexts/UserContext';
import { getUsernameFromLocalStorage } from '../Contexts/Actions/user-localstorage';
import MatchListProvider,{ MatchListContext } from '../Contexts/MatchContext';
import MatchList from './MatchListComponents/MatchList';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './Style/MatchListPage.css';


export default function MatchListPage() {
    const { user } = useUser();
    const { matches, addMatch, fetchMatches} = useContext(MatchListContext); 
  
    const [creatingMatch, setCreatingMatch] = useState(false);
  
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
      <Header/>
      <div className='main-list'>
        <div className='main-content-list'>
          <p>Connecté en tant que : <strong>{user?.username}</strong></p>
          <a href="/login">Déconnexion</a>
        </div>
        <div className='button-match-creation'>
          <button onClick={handleCreateMatch} disabled={creatingMatch} className='connexion-button'>
              Créer un match
          </button>
        </div>
        <div className='list-main'>
          <p>Nb : Vous devez recharger la page pour voir le match créé. Il est impossible de créer un match si il y'a déjà un match en attente.</p>
          <MatchListProvider>
            <MatchList/>
          </MatchListProvider>
        </div>
      </div>
      <Footer/>
      </>
    );
  }
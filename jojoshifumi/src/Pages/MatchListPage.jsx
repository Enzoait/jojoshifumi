import React from 'react';
import { useUser } from '../Contexts/UserContext';
import { getUsernameFromLocalStorage } from '../Contexts/Actions/user-localstorage';

export default function MatchListPage() {
    const { user } = useUser();
    const username = user?.username || getUsernameFromLocalStorage();
    return<>
        <div>
            <p>Connecté en tant que : <strong>{username}</strong></p>
            <p>Page de liste de matchs</p>
            <a href="/login">Déconnexion</a>
        </div>
    </>;
};
import React from 'react';
import { useUser } from '../Contexts/UserContext';

export default function HomePage() {
    const { user } = useUser();
    return<>
        <div>
            <p>Connecté en tant que : <strong>{user ? user.username : "Utilisateur non connecté"}</strong></p>
            <p>Page de liste de matchs</p>
            <a href="/login">Retour à la page de connexion</a> {//provisoir
            }
        </div>
    </>;
};
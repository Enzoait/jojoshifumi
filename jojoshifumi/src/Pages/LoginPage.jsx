import { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { useUser } from '../Contexts/UserContext';
import { loginUser } from '../Contexts/Actions/user-fetch';
import { saveTokenToLocalStorage, getTokenFromLocalStorage } from '../Contexts/Actions/user-localstorage';

export default function LoginPage() {
    const { dispatch, setUser } = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const redirection = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const token = await loginUser(username, password);
        saveTokenToLocalStorage(token);
        setUser(dispatch, { username, token });
        redirection('/matchlist');
      } catch (error) {
        console.error('Login error:', error);
      }
    };

  return (
    <form className="form-login" onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Identifiant"
        className="input-field"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text" // changer en "password" pour cacher le mdp lors de la saisie 
        placeholder="Mot de passe"
        className="input-field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="connexion-button" type="submit">
        Se connecter
      </button>
      <p>Vous n'avez pas de compte ? <a href="/register">Créer son compte</a></p>
    </form>
  );
}

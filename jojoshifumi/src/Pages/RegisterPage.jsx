import { useState } from 'react';
import { useUser } from '../Contexts/UserContext';
import { registerUser } from '../Contexts/Actions/user-fetch';
import { saveTokenToLocalStorage, getTokenFromLocalStorage } from '../Contexts/Actions/user-localstorage';

export default function RegisterPage() {
    const { dispatch, setUser } = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
  
    const handleRegister = async (e) => {
      e.preventDefault();
  
      try {
        const token = await registerUser(username, password);
        saveTokenToLocalStorage(token);
        setUser(dispatch, { username, token });
        setSuccess(true);
      } catch (error) {
        console.error('Register error:', error);
      }
    };

  return (
    <form className="form-login" onSubmit={handleRegister}>
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
        S'inscrire
      </button>
      {success ? 
        <div className='success-message'>
          <p >Inscription reussie, vous pouvez à présent vous <a href="/login">connecter</a></p>
        </div>
        : 
        <p>Vous avez déjà un compte ? <a href="/login">Se connecter</a></p>
      }
    </form>
  );
}
import { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { useUser } from '../Contexts/UserContext';
import { loginUser } from '../Contexts/Actions/user-fetch';
import { saveTokenToLocalStorage, getTokenFromLocalStorage } from '../Contexts/Actions/user-localstorage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './Style/LoginPage.css';
import key from '../assets/key.svg'


export default function LoginPage() {
    const { dispatch, setUser } = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);

    const redirection = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const token = await loginUser(username, password);
        setUser(dispatch, { username, token });
        redirection('/matchlist');
      } catch (error) {
        console.error('Login error:', error);
        setLoginFailed(true);
      }
    };

  return <>
  <Header/>
  <div className='form-content'>
    <form className="form-login" onSubmit={handleLogin}>
      
      <div className='login-password'>
      <img src={key} alt="key" className='key-image'/>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password" // changer en "password" pour cacher le mdp lors de la saisie 
          placeholder="Mot de passe"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='button-links'>
        <button className="connexion-button" type="submit">
          Se connecter
        </button>
        {loginFailed ? 
          <div className="error-message"> 
            <p>Nom d'utilisateur ou mot de passe incorrect</p>
            <p>Vous n'avez pas de compte ? <a href="/register">Créer son compte</a></p> 
          </div>  
          : 
          <p>Vous n'avez pas de compte ? <a href="/register">Créer son compte</a></p>
        }
      </div>
    </form>
    </div>
    <Footer/>
    </>;
}

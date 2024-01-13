import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './Pages/LoginPage.jsx'
import RegisterPage from './Pages/RegisterPage.jsx'
import HomePage from './Pages/HomePage';
import GamePage from './Pages/GamePage';
import MatchListPage from './Pages/MatchListPage';
import { UserProvider } from './Contexts/UserContext.jsx';
import MatchListProvider from './Contexts/MatchContext.jsx';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    
      <UserProvider>
        <MatchListProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
              <Route path="/matchlist" element={<MatchListPage/>}/>
              <Route path="/matches/:matchId" element={<GamePage />} />
            </Routes>
          </Router>
        </MatchListProvider>
      </UserProvider>
  );
}

export default App;

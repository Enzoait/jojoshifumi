import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './Pages/LoginPage.jsx'
import HomePage from './Pages/HomePage';
import GamePage from './Pages/GamePage';
import { UserProvider } from './Contexts/UserContext.jsx';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={<LoginPage/>}
          />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

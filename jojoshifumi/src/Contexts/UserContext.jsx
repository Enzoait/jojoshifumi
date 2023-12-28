import React, { createContext, useContext, useState } from 'react';

// Contexte
const UserContext = createContext();

// Composant Contexte Provider 
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setUserContext = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, setUser: setUserContext }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook qu'on a créé qui permet d'accèder au contexte
export const useUser = () => {
  const context = useContext(UserContext);
  // Verifie que useUser est bien utilisé dans le contexte UserProvider
  if (!context) {
    throw new Error('useUser doit être utilisé dans le contexte UserProvider');
  }
  return context;
};

export const saveTokenToLocalStorage = (token) => {
    localStorage.setItem('userToken', token);
};
  
export const getTokenFromLocalStorage = () => {
  return localStorage.getItem('userToken');
};

export const getUsernameFromLocalStorage = () => {
  return localStorage.getItem('username');
};

export const getUserFromLocalStorage = () => {
  const token = localStorage.getItem('userToken');
  const username = localStorage.getItem('username');
  return { token, username };
};
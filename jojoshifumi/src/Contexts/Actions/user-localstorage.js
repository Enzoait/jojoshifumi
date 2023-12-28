export const saveTokenToLocalStorage = (token) => {
    localStorage.setItem('userToken', token);
  };
  
  export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('userToken');
  };
export const loginUser = async (username, password) => {
    try {
      const response = await fetch('http://localhost:27017/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.token;
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
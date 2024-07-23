// const backend = 'http://localhost:3000'
const API_URL = '/api/auth/';

export const register = async (username: string, password: string) => {
  const response = await fetch(`${API_URL}register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  return response.json();
};

export const login = async (username: string, password: string) => {
  const response = await fetch(`${API_URL}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  return response.json();
};

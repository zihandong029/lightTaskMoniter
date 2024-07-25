const API_URL = '/api/user/';

export const getAllUsers = async () => {
  const response = await fetch(`${API_URL}getAllUser`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response.json();
};

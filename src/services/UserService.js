import axios from 'axios';

const API_URL = '/api/users';

const registerUser = (user) => {
  return axios.post(`${API_URL}/register`, user);
};

const getUserByUsername = (username) => {
  return axios.get(`${API_URL}/${username}`);
};

export default {
  registerUser,
  getUserByUsername,
};

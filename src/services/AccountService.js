import axios from 'axios';

const API_URL = '/api/accounts';

const createAccount = (account) => {
  return axios.post(API_URL, account);
};

const getAccountsByUserId = (userId) => {
  return axios.get(`${API_URL}/user/${userId}`);
};

export default {
  createAccount,
  getAccountsByUserId,
};

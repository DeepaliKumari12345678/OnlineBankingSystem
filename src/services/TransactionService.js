import axios from 'axios';

const API_URL = '/api/transactions';

const createTransaction = (transaction) => {
  return axios.post(API_URL, transaction);
};

const getTransactionsByAccountId = (accountId) => {
  return axios.get(`${API_URL}/account/${accountId}`);
};

export default {
  createTransaction,
  getTransactionsByAccountId,
};

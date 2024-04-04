import axios from 'axios';
const API_BASE_URL = 'http://your-api-url';
export const fetchAssetsApi = () => {
  return axios.get(`${API_BASE_URL}/assets`);
};
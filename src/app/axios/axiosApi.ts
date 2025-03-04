import axios from 'axios';

export const getContentType = () => ({
  'Content-Type': 'application/json',
});

const API_URL = `${process.env.REACT_APP_API_URL}`;
console.log('API_URL:', API_URL);
export const axiosClassic = axios.create({
  baseURL: API_URL,
  headers: getContentType(),
});

export default axiosClassic;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Backend server URL
});

export default axiosInstance;
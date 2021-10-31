import axios from 'axios';
import config from '../config';

const axieApi = axios.create({
  baseURL: config.axieApi,
  timeout: 1000,
});

export default axieApi;

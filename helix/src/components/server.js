import axios from 'axios';

const server = axios.create({
    baseURL: '',
    timeout: 1000,
  });

export default server;
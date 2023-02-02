import axios from 'axios';

const server = axios.create({
    baseURL: 'http://localhost:5030',
    timeout: 1000,
  });

export default server;
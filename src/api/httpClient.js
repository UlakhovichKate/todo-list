import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://dummyjson.com/todos/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpClient;

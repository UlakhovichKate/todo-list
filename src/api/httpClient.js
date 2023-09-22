import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://dummyjson.com/todos/',
});

export default httpClient;

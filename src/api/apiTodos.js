import httpClient from '@/api/httpClient';

const getAllTodos = () => httpClient.get('user/26');

export {getAllTodos};

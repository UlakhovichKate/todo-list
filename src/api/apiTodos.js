import httpClient from '@/api/httpClient';

const getAllTodos = () => httpClient.get('user/13');

export {getAllTodos};

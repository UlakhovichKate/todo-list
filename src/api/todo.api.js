import httpClient from '@/api/http.client';

export const getTodos = () => {
  const USER_ID = 26;

  return httpClient({
    url: `https://dummyjson.com/todos/user/${USER_ID}`,
    method: 'get',
  });
}

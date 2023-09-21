import httpClient from '@/api/http.client';

export const getTodos = () => {
  const USERID = 26;

  return httpClient({
    url: `https://dummyjson.com/todos/user/${USERID}`,
    method: 'get',
  });
}

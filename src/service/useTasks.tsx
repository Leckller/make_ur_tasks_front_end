import { useContext } from 'react';
import AppContext from '../context/AppContext';

function useTasks() {
  const { token } = useContext(AppContext);

  const effect = async (
    body: { completed?: boolean, taskName?: string, deadline?: Date, id?: number },
    method: 'POST' | 'GET' | 'PATCH' | 'DELETE',
  ) => {
    const url = 'http://localhost:6969/tasks';
    const urlWithId = `http://localhost:6969/tasks/${body.id}`;
    const request = await fetch(body.id ? urlWithId : url, {
      method,
      mode: 'cors',
      body: method === 'GET' || method === 'DELETE' ? null : JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        auth: `Bearer: ${token}`,
      },
    });

    const response = await request.json();
    if (response.message) {
      // eslint-disable-next-line no-alert
      alert(response.message);
    }
    return response;
  };
  return { effect };
}

export default useTasks;

import { UserTasksType } from '../type';

const urlBase = 'https://makeurtasksbackend-production.up.railway.app';

export const cadastro = async (body: {
  email: string, nickName: string, password: string
}) => {
  const url = `${urlBase}/users`;
  const request = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const response = await request.json();

  return response as { token?: string, message: string };
};

export const login = async (body: { email: string, password: string }) => {
  const url = `${urlBase}/login`;
  const request = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const response = await request.json();

  return response as { token?: string, message: string };
};

export const addTask = async (body: {
  completed?: boolean, taskName?: string, deadline?: Date, id?: number
}, token: string) => {
  const url = `${urlBase}/tasks`;
  const urlWithId = `${urlBase}/${body.id}`;
  const request = await fetch(body.id ? urlWithId : url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      auth: `Bearer: ${token}`,
    },
  });

  const response = await request.json();

  return response as { message: string };
};

export const deleteTask = async (id: number, token: string) => {
  const url = `${urlBase}/tasks/${id}`;
  const request = await fetch(url, {
    method: 'DELETE',
    mode: 'cors',
    body: JSON.stringify(id),
    headers: {
      'Content-Type': 'application/json',
      auth: `Bearer: ${token}`,
    },
  });

  const response = await request.json();

  return response as { message: string };
};

export const allTasks = async (token: string) => {
  const url = `${urlBase}/tasks`;

  const request = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      auth: `Bearer: ${token}`,
    },
  });

  const [response] = await request.json();

  return response as UserTasksType;
};

export const editTask = async (body: {
  taskName?: string, completed?: boolean }, id:number, token: string) => {
  const url = `${urlBase}/tasks/${id}`;
  const request = await fetch(url, {
    method: 'PATCH',
    mode: 'cors',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      auth: `Bearer: ${token}`,
    },
  });

  const response = await request.json();

  return response as { message: string };
};

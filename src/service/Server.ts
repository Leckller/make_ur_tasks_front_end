/* eslint-disable sonarjs/no-duplicate-string */
import { LocalSaves } from '../components/Classes/Saves';
import TaskClass from '../components/Classes/TaskClass';

export interface SignFields {
  email: string,
  password: string
}

export interface Task {
  id: number,
  taskName: string;
  deadline: Date;
  description: string;
  completed: boolean
  userId: number
}

export type ResponseServer<DataType> = {
  data: DataType,
  message: string
};

export interface ServerMethods {
  cadastro(fields: SignFields): Promise<ResponseServer<string>>
  login(fields: SignFields): Promise<ResponseServer<string>>
  criarTarefa(fields: Task): Promise<ResponseServer<TaskClass>>
  editarTarefa(fields: Task): Promise<ResponseServer<boolean>>
  deletarTarefa(taskId: number): Promise<ResponseServer<boolean>>
  todasTarefas(userId: number): Promise<ResponseServer<Task[]>>
}

export type FetchOptions = {
  method: 'POST' | 'GET' | 'DELETE' | 'PATCH',
  body: any,
};

export default class Server implements ServerMethods {
  url = 'http://localhost:8001';

  auth = '';

  protected async fetchServer(url: string, options: FetchOptions)
    : Promise<ResponseServer<any>> {
    if (options.method === 'GET') {
      const request = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          auth: this.auth,
        },
      });
      const data = await request.json();
      return data;
    }
    const request = await fetch(url, {
      method: options.method,
      mode: 'cors',
      body: JSON.stringify(options.body),
      headers: {
        'Content-Type': 'application/json',
        auth: this.auth,
      },
    });
    const data = await request.json();
    return data;
  }

  constructor(token: string) {
    this.auth = token;
  }

  async cadastro(fields: SignFields): Promise<ResponseServer<string>> {
    try {
      const url = `${this.url}/user/cadastro`;
      const data = await this.fetchServer(url, { body: fields, method: 'POST' });
      return data;
    } catch {
      return { data: '', message: 'Erro no servidor!' };
    }
  }

  async login(fields: SignFields): Promise<ResponseServer<string>> {
    try {
      const url = `${this.url}/user/login`;
      const data = await this.fetchServer(url, { body: fields, method: 'POST' });
      return data;
    } catch {
      return { data: '', message: 'Erro no servidor!' };
    }
  }

  async criarTarefa(fields: Task): Promise<ResponseServer<Task>> {
    try {
      const url = `${this.url}/task/create`;
      const data = await this.fetchServer(url, { body: fields, method: 'POST' });
      return data;
    } catch {
      return { data: {} as Task, message: 'Erro no servidor!' };
    }
  }

  async deletarTarefa(taskId: number): Promise<ResponseServer<boolean>> {
    try {
      const url = `${this.url}/task/delete`;
      const data = await this.fetchServer(url, { body: { taskId }, method: 'DELETE' });
      return data;
    } catch {
      return { data: false, message: 'Erro no servidor!' };
    }
  }

  async editarTarefa(fields: Task): Promise<ResponseServer<boolean>> {
    try {
      const url = `${this.url}/task/edit`;
      const data = await this.fetchServer(url, { body: fields, method: 'PATCH' });
      return data;
    } catch {
      return { data: false, message: 'Erro no servidor!' };
    }
  }

  async todasTarefas(): Promise<ResponseServer<Task[]>> {
    try {
      const url = `${this.url}/task`;
      const data = await this.fetchServer(url, { body: {}, method: 'GET' });
      return data;
    } catch (err) {
      console.log(err);
      return { data: [], message: 'Erro no servidor!' };
    }
  }
}

export const DataBase = new Server(LocalSaves.localGet('User')?.token);
